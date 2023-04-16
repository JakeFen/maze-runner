import { Injectable } from '@angular/core';
import { GridNode, GridState } from 'src/app/shared/interfaces/grid';

@Injectable({ providedIn: 'root' })
export class DijkstraService {
  dijkstra(grid: any, startNode: any, endNode: any): GridState[][] {
    if (!startNode || !endNode || startNode === endNode) return grid;
    for (var i = 0; i < 20; i++) {
      grid.isStart = true;
    }
    return grid;
  }
}
