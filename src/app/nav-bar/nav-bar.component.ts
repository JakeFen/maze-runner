import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/data-access/state/app.state';
import { runDijkstra } from '../shared/data-access/state/maze/maze.actions';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private store: Store<AppState>) {}

  runDijkstra() {
    this.store.dispatch(runDijkstra());
  }
}
