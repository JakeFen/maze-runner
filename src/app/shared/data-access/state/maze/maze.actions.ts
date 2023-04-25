import { createAction, props } from '@ngrx/store';

// Create Grid
export const createGrid = createAction('[Grid] Create Grid');
export const createGridSuccess = createAction(
  '[Grid] Create Grid Success',
  props<{ grid: any }>()
);
export const createGridFailure = createAction(
  '[Grid] Create Grid Failure',
  props<{ error: string }>()
);

// Update Start Node
export const updateStartNode = createAction('[Error] Update Start Node');
export const updateStartNodeSuccess = createAction(
  '[Error] Update Start Node Success',
  props<{ grid: any }>()
);
export const updateStartNodeFailure = createAction(
  '[Error] Update Start Node Failure',
  props<{ error: string }>()
);

// Update String
export const updateString = createAction('[Error] Update String');
export const updateStringSuccess = createAction(
  '[Error] Update String Success',
  props<{ string: string }>()
);
export const updateStringFailure = createAction(
  '[Error] Update String Failure',
  props<{ error: string }>()
);
