import { Component } from '@angular/core';
import { GridNode } from '../shared/interfaces/grid';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  grid: any = [];

  constructor() {
    for (let row = 0; row < 21; row++) {
      const currentRow = [];
      for (let col = 0; col < 55; col++) {
        currentRow.push(createNode(row, col));
      }
      this.grid.push(currentRow);
    }
  }
}

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const END_NODE_ROW = 10;
const END_NODE_COL = 40;

const createNode = (row: number, col: number): GridNode => {
  return {
    row,
    col,
    isStart: START_NODE_ROW === row && START_NODE_COL === col,
    isFinish: END_NODE_ROW === row && END_NODE_COL === col,
  };
};
