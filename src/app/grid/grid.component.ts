import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { createGrid } from '../shared/data-access/state/maze/maze.actions';
import { selectAllNodes } from '../shared/data-access/state/maze/maze.selectors';
import { AppState } from '../shared/data-access/state/app.state';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  public grid$ = this.store.select(selectAllNodes);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(createGrid());
  }

  log(data: any) {
    console.log(data);
  }
}
