import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/classes/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean): void {
    this.isComplete.emit(complete);
  }
  constructor() {}

  ngOnInit(): void {}
}
