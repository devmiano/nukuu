import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

import { faUserCircle as fasUser } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as fasThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown as fasThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { TopQuoteComponent } from './components/top-quote/top-quote.component';
import { TopQuoteDetailsComponent } from './components/top-quote-details/top-quote-details.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormComponent,
    TopQuoteComponent,
    TopQuoteDetailsComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    DatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasUser, fasThumbsUp, fasThumbsDown);
  }
}
