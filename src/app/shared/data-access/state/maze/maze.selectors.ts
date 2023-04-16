import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GridState } from '../../../interfaces/grid';

export const selectGrid = (state: AppState) => state.grid;
export const selectAllNodes = createSelector(
  selectGrid,
  (state: GridState) => state.grid
);
