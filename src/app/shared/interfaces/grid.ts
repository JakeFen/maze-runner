export interface GridState {
  grid: GridNode[][];
  startNode: GridNode | null;
  endNode: GridNode | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export interface CreateGrid {
  grid: GridNode[][];
  startNode: GridNode;
  endNode: GridNode;
}

export interface GridNode {
  row: number;
  col: number;
  isStart: boolean;
  isFinish: boolean;
  distance: number;
  isVisited: boolean;
  isWall: boolean;
  previousNode: any;
}
