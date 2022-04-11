import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/classes/quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  newQuote = new Quote(0, '', '', '', new Date());
  @Output() addNewQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addNewQuote.emit(this.newQuote);
  }
  constructor() {}

  ngOnInit(): void {}
}
