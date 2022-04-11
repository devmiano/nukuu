import { Component, OnInit } from '@angular/core';
import { Quote } from '../../classes/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      0,
      'Sammy Muchiri',
      'Arthur Schopenhauer',
      'Talent hits a target no one else can hit, Genius hits a target no one else can see.',
      new Date()
    ),
    new Quote(
      1,
      'Jane Ngoiri',
      'Hellen Keller',
      'Be happy with what you have, while working for what you want.',
      new Date()
    ),
    new Quote(
      2,
      'Christian Milan',
      'Hans Christian Andersen',
      'Enjoy life. Theres plenty of time to be dead.',
      new Date()
    ),
  ];

  toggleDetails(index: number): void {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.creationDate = new Date(quote.creationDate);
    this.quotes.push(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}