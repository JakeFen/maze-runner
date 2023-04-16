import { Injectable } from '@angular/core';
import { CreateGrid, GridNode } from '../../interfaces/grid';

@Injectable({ providedIn: 'root' })
export class GridService {
  START_NODE_ROW = 10;
  START_NODE_COL = 15;
  END_NODE_ROW = 10;
  END_NODE_COL = 40;

  createGrid(): CreateGrid[] {
    let grid = [];

    for (let row = 0; row < 21; row++) {
      const currentRow = [];
      for (let col = 0; col < 55; col++) {
        currentRow.push({
          row,
          col,
          isStart: this.START_NODE_ROW === row && this.START_NODE_COL === col,
          isFinish: this.END_NODE_ROW === row && this.END_NODE_COL === col,
          distance: Infinity,
          isVisited: false,
          isWall: false,
          previousNode: null,
        });
      }
      grid.push(currentRow);
    }
    return [
      {
        grid: grid,
        startNode: this.getStartNode([grid]),
        endNode: this.getEndNode([grid]),
      },
    ];
  }

  getStartNode(grid: any) {
    for (let row = 0; row < 21; row++) {
      for (let col = 0; col < 55; col++) {
        if (grid[0][row][col].isStart) return grid[0][row][col];
      }
    }
  }

  getEndNode(grid: any) {
    for (let row = 0; row < 21; row++) {
      for (let col = 0; col < 55; col++) {
        if (grid[0][row][col].isFinish) return grid[0][row][col];
      }
    }
  }
}
