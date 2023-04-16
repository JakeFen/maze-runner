import { Injectable } from '@angular/core';
import { GridService } from '../../services/grid.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  createGrid,
  createGridFailure,
  createGridSuccess,
} from './maze.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class MazeEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private gridService: GridService
  ) {}

  // Run this code when a createGrid action is dispatched
  createGrid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createGrid),
      switchMap(() =>
        // Call the createGrid method and convert to observable
        from(this.gridService.createGrid()).pipe(
          // Take the returned value and return a new success action
          map((grid) => {
            console.log(grid);
            return createGridSuccess({ grid: grid });
          }),
          // If it fails, return a new falure action
          catchError((error) => of(createGridFailure({ error: error })))
        )
      )
    )
  );
}
