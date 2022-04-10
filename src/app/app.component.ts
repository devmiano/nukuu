import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Nukuu Quotes';
  btnText: string = 'get started';
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;

    if (this.showForm) {
      this.btnText = 'close';
    } else {
      this.btnText = 'get started';
    }
  }
}
