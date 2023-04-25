// import { createSelector } from '@ngrx/store';
// import { AppState } from '../app.state';
// import { GridState } from '../../../interfaces/grid';

import { createSelector } from '@ngrx/store';

export const selectGrid = (state: any) => state.grid;

export const getGrid = createSelector(selectGrid, (state: any) => {
  return state.grid;
});
export const getError = createSelector(selectGrid, (state: any) => state.error);
export const getString = createSelector(
  selectGrid,
  (state: any) => state.string
);
