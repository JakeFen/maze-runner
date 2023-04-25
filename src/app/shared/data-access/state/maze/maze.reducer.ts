import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as MazeActions from './maze.actions';
import * as MazeSelectors from './maze.selectors';

export interface Grid {
  _id: number;
  rows: any[];
}

export interface State {
  grid: Grid;
  string: any;
  error: string;
}

export const initialState: State = {
  grid: null,
  string: 'Test',
  error: 'Error',
};

export const gridReducer = createReducer(
  initialState,

  // Create Grid
  on(MazeActions.createGrid, (state) => ({
    ...state,
  })),
  on(MazeActions.createGridSuccess, (state, { grid }) => ({
    ...state,
    grid: grid,
  })),
  on(MazeActions.createGridFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  // Update Start Node
  on(MazeActions.updateStartNode, (state) => ({
    ...state,
  })),
  on(MazeActions.updateStartNodeSuccess, (state, { grid }) => ({
    ...state,
    grid: grid,
  })),
  on(MazeActions.updateStartNodeFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  // Update Error
  on(MazeActions.updateString, (state) => ({
    ...state,
  })),
  on(MazeActions.updateStringSuccess, (state, { string }) => ({
    ...state,
    string: string,
  })),
  on(MazeActions.updateStringFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
