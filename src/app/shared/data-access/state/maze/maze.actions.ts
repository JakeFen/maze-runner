import { createAction, props } from '@ngrx/store';
import { GridNode, GridState } from 'src/app/shared/interfaces/grid';

// Create Grid
export const createGrid = createAction('[Maze] Load Grid');
export const createGridSuccess = createAction(
  '[Maze] Load Grid Success',
  props<{ grid: GridNode[][]; startNode: GridNode; endNode: GridNode }>()
);
export const createGridFailure = createAction(
  '[Maze] Load Grid Failure',
  props<{ error: string }>()
);

// Dijkstra
export const runDijkstra = createAction('[Dijkstra] Run Dijkstra');
export const runDijkstraSuccess = createAction(
  '[Dijkstra] Run Dijkstra Success',
  props<{ grid: any }>()
);
export const runDijkstraFailure = createAction(
  '[Dijkstra] Run Dijkstra Failure',
  props<{ error: string }>()
);
