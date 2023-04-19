import { Injectable } from '@angular/core';
import { GridService } from '../../services/grid.service';
import { DijkstraService } from '../../services/algorithms/dijkstra.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  createGrid,
  createGridFailure,
  createGridSuccess,
  runDijkstra,
  runDijkstraFailure,
  runDijkstraSuccess,
} from './maze.actions';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import {
  getGrid,
  selectAllNodes,
  selectEndNode,
  selectStartNode,
} from './maze.selectors';
import { AppState } from '../app.state';

@Injectable()
export class MazeEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private gridService: GridService,
    private dijkstraService: DijkstraService
  ) {}

  // Run this code when a createGrid action is dispatched
  createGrid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createGrid),
      switchMap(() =>
        // Call the createGrid method and convert to observable
        from(this.gridService.createGrid()).pipe(
          // Take the returned value and return a new success action
          map((data) => {
            return createGridSuccess({
              grid: data.grid,
              startNode: data.startNode,
              endNode: data.endNode,
            });
          }),
          // If it fails, return a new falure action
          catchError((error) => of(createGridFailure({ error: error })))
        )
      )
    )
  );

  dijkstra$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(runDijkstra),
      withLatestFrom(this.store.select(getGrid)),
      switchMap(([action, request]) =>
        this.dijkstraService.dijkstra(request).pipe(
          map((res) =>
            runDijkstraSuccess({
              grid: res,
            })
          ),
          catchError((error) => of(runDijkstraFailure({ error: error })))
        )
      )
    );
  });
}
