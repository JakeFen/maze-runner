import { createReducer, on } from '@ngrx/store';
import { GridState } from 'src/app/shared/interfaces/grid';
import {
  createGrid,
  createGridSuccess,
  createGridFailure,
  runDijkstra,
  runDijkstraSuccess,
  runDijkstraFailure,
} from './maze.actions';

export const initialState: GridState = {
  grid: [],
  startNode: null,
  endNode: null,
  error: null,
  status: 'pending',
};

export const gridReducer = createReducer(
  initialState,

  // CreateGrid
  on(createGrid, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(createGridSuccess, (state, { grid, startNode, endNode }) => ({
    ...state,
    grid: grid,
    startNode: startNode,
    endNode: endNode,
    status: 'success',
  })),
  on(createGridFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(runDijkstra, (state) => ({
    ...state,
  })),
  on(runDijkstraSuccess, (state, { grid }) => ({
    ...state,
    grid: grid,
  })),
  on(runDijkstraFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
