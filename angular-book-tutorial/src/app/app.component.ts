import {Component} from '@angular/core';
import {ProductService} from './product.service';
import {AdvertisementService} from './advertisement.service';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{ title }}</h1>
      <img src="{{ imageUrl }}"/>
      <button
          class="btn btn-primary"
          [class.disabled]="!isValid"
      >
          Submit
      </button>
      <button (click)="onClickMe($event)">Submit with event</button>
      <rating [rating]="4"></rating>
    <products></products>
  `,
  providers: [ProductService, AdvertisementService]
})

export class AppComponent {
  title = 'Zealand Angular Book App!';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  isValid = false;

  onClickMe($event) {
    console.log('Clicked', $event)
  }
}

