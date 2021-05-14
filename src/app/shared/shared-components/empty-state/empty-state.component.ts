import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'empty-state-component',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
@Input() massage:string = '';
@Input() subMassage:string = '';
  constructor() { }

  ngOnInit() {
  }

}
