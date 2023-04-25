import { Component } from '@angular/core';
import { createGrid } from './shared/data-access/state/maze/maze.actions';
import { Store } from '@ngrx/store';
import { getGrid } from './shared/data-access/state/maze/maze.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  grid$ = this.store.select(getGrid);

  constructor(private store: Store<any>) {
    this.store.dispatch(createGrid());
  }
}
