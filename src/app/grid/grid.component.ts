import { Component } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  grid: any = [];

  constructor() {
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 55; col++) {
        currentRow.push([row, col]);
      }
      this.grid.push(currentRow);
    }
  }
}
