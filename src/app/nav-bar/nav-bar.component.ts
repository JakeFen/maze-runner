import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  updateStartNode,
  updateString,
} from '../shared/data-access/state/maze/maze.actions';
import { getString } from '../shared/data-access/state/maze/maze.selectors';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  stringMessage$ = this.store.select(getString);

  constructor(private store: Store<any>) {}

  test() {
    this.store.dispatch(updateString());
  }

  updateStartNode() {
    this.store.dispatch(updateStartNode());
  }
}
