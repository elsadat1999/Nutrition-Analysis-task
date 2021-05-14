import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirm-massage-component',
  templateUrl: './confirm-massage.component.html',
  styleUrls: ['./confirm-massage.component.scss']
})
export class ConfirmMassageComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() confirmation = new EventEmitter();
  @Input() massage:string ="";
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.close.emit(false)
  }

  confirmationMassage() {
    this.confirmation.emit(true)
  }

}
