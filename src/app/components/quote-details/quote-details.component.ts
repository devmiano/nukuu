import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/classes/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() upVotes = new EventEmitter<string>();

  quoteVotes(total: string): void {
    this.upVotes.emit(total);
  }
  quoteDelete(complete: boolean): void {
    this.isDelete.emit(complete);
  }

  constructor() {}

  ngOnInit(): void {}
}
