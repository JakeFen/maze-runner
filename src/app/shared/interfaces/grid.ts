export interface GridState {
  grid: GridNode[][];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export interface GridNode {
  row: number;
  col: number;
  isStart: boolean;
  isFinish: boolean;
}
