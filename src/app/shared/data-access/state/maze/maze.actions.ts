import { createAction, props } from '@ngrx/store';
import { GridNode } from 'src/app/shared/interfaces/grid';

export const createGrid = createAction('[Maze] Load Grid');
export const createGridSuccess = createAction(
  '[Maze] Load Grid Success',
  props<{ grid: GridNode[][] }>()
);
export const createGridFailure = createAction(
  '[Maze] Load Grid Failure',
  props<{ error: string }>()
);
