import { createReducer, on } from '@ngrx/store';
import { GridState } from 'src/app/shared/interfaces/grid';
import {
  createGrid,
  createGridFailure,
  createGridSuccess,
} from './maze.actions';

export const initialState: GridState = {
  grid: [],
  error: null,
  status: 'pending',
};

export const gridReducer = createReducer(
  initialState,
  on(createGrid, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(createGridSuccess, (state, { grid }) => ({
    ...state,
    grid: grid,
    status: 'success',
  })),
  on(createGridFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
