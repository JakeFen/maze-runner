import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-node',
  templateUrl: './grid-node.component.html',
  styleUrls: ['./grid-node.component.scss'],
})
export class GridNodeComponent implements OnInit {
  @Input() col: number;
  @Input() row: number;
  @Input() isStart: boolean;
  @Input() isFinish: boolean;

  nodeClass: string;

  ngOnInit() {
    this.nodeClass = this.isStart
      ? 'start-node'
      : this.isFinish
      ? 'finish-node'
      : '';
  }
}
