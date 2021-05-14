import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-massage-component',
  templateUrl: './error-massage.component.html',
  styleUrls: ['./error-massage.component.scss']
})
export class ErrorMassageComponent implements OnInit {
  @Input() massage:string = "";
  constructor() { }

  ngOnInit() {
  }

}
