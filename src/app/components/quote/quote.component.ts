import { Component, OnInit } from '@angular/core';
import { Quote } from '../../classes/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  title = 'Nukuu Quotes';
  btnText: string = 'get started';
  showForm: boolean = false;

  quotes: Quote[] = [
    new Quote(
      0,
      'Sammy',
      'Arthur Schopenhauer',
      'Talent hits a target no one else can hit, Genius hits a target no one else can see.',
      new Date(2022, 3, 9)
    ),
    new Quote(
      1,
      'Jane',
      'Hellen Keller',
      'Be happy with what you have, while working for what you want.',
      new Date(2022, 3, 7)
    ),
    new Quote(
      2,
      'Milan',
      'Hans Christian Andersen',
      'Enjoy life. Theres plenty of time to be dead.',
      new Date(2022, 3, 1)
    ),
  ];
  toggleForm() {
    this.showForm = !this.showForm;

    if (this.showForm) {
      this.btnText = 'close';
    } else {
      this.btnText = 'get started';
    }
  }

  toggleDetails(index: number): void {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  addNewQuote(quote: Quote): void {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.creationDate = new Date(quote.creationDate);
    this.quotes.push(quote);
  }

  addLikes(index: number): void {
    this.quotes[index].showLikes++;
  }

  addDislikes(index: number): void {
    this.quotes[index].showDislikes++;
  }

  constructor() {}

  ngOnInit(): void {}
}
