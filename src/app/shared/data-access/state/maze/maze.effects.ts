import { Injectable } from '@angular/core';
import { GridService } from '../../services/grid.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as MazeActions from './maze.actions';
import * as MazeSelectors from './maze.selectors';
import { map, withLatestFrom, switchMap, catchError } from 'rxjs/operators';

import { of, from } from 'rxjs';

@Injectable()
export class MazeEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private gridService: GridService // private dijkstraService: DijkstraService
  ) {}

  createGrid$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MazeActions.createGrid),
      switchMap(() =>
        this.gridService.createGrid().pipe(
          map((res) => MazeActions.createGridSuccess({ grid: res })),
          catchError((error) => of(MazeActions.createGridFailure({ error })))
        )
      )
    );
  });

  updateStartNode$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MazeActions.updateStartNode),
      withLatestFrom(this.store.select(MazeSelectors.getGrid)),
      switchMap(([action, request]) =>
        this.gridService.updateStartNode(request).pipe(
          map((res) => MazeActions.updateStartNodeSuccess({ grid: res })),
          catchError((error) =>
            of(MazeActions.updateStartNodeFailure({ error }))
          )
        )
      )
    );
  });

  updateString$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MazeActions.updateString),
      switchMap(() =>
        this.gridService.updateString().pipe(
          map((res) => MazeActions.updateStringSuccess({ string: res })),
          catchError((error) => of(MazeActions.updateStringFailure({ error })))
        )
      )
    );
  });

  //   // Run this code when a createGrid action is dispatched
  //   createGrid$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(createGrid),
  //       switchMap(() =>
  //         // Call the createGrid method and convert to observable
  //         from(this.gridService.createGrid()).pipe(
  //           // Take the returned value and return a new success action
  //           map((data) => {
  //             return createGridSuccess({
  //               grid: data.grid,
  //               startNode: data.startNode,
  //               endNode: data.endNode,
  //             });
  //           }),
  //           // If it fails, return a new falure action
  //           catchError((error) => of(createGridFailure({ error: error })))
  //         )
  //       )
  //     )
  //   );

  //   dijkstra$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(runDijkstra),
  //       withLatestFrom(this.store.select(getGrid)),
  //       switchMap(([action, request]) =>
  //         this.dijkstraService.dijkstra(request).pipe(
  //           map((res) =>
  //             runDijkstraSuccess({
  //               grid: res,
  //             })
  //           ),
  //           catchError((error) => of(runDijkstraFailure({ error: error })))
  //         )
  //       )
  //     );
  //   });
}
