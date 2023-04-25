import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { CreateGrid, GridNode } from '../../interfaces/grid';

@Injectable({ providedIn: 'root' })
export class GridService {
  START_NODE_ROW = 10;
  START_NODE_COL = 15;
  END_NODE_ROW = 10;
  END_NODE_COL = 40;

  //   createGrid(): CreateGrid[] {
  //     let grid: GridNode[][] = [];

  //     for (let row = 0; row < 21; row++) {
  //       let currentRow: GridNode[] = [];
  //       for (let col = 0; col < 55; col++) {
  //         currentRow.push({
  //           row,
  //           col,
  //           isStart: this.START_NODE_ROW === row && this.START_NODE_COL === col,
  //           isFinish: this.END_NODE_ROW === row && this.END_NODE_COL === col,
  //           distance: Infinity,
  //           isVisited: false,
  //           isWall: false,
  //           previousNode: null,
  //         });
  //       }
  //       grid.push(currentRow);
  //     }
  //     return [
  //       {
  //         grid: grid,
  //         startNode: this.getStartNode([grid]),
  //         endNode: this.getEndNode([grid]),
  //       },
  //     ];
  //   }

  createGrid(): Observable<any> {
    let grid = [];
    let nodeId = 0;
    for (var row = 0; row < 21; row++) {
      let currentRow = [];
      for (var col = 0; col < 51; col++) {
        currentRow.push({
          _id: nodeId,
          col,
          isStart: this.START_NODE_ROW === row && this.START_NODE_COL === col,
          isFinish: this.END_NODE_ROW === row && this.END_NODE_COL === col,
          distance: 0,
          // isVisited: false,
          // isWall: false,
          // previousNode: null,
        });
        nodeId++;
      }
      grid.push(currentRow);
    }
    return of(grid);
  }

  updateStartNode(grid: any): Observable<any> {
    return of(grid);
  }

  updateString(): Observable<any> {
    let newData = of('Updated This Error');
    return newData;
  }
}
