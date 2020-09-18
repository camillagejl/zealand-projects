import {Component} from '@angular/core';
import {ProductService} from './product.service';
import {AdvertisementService} from './advertisement.service';

@Component({
  selector: 'app-root',
  template: `
    <bs-jumbotron>
        <div class="heading">Hello World!</div>
        <div class="body">This is a simple hero unit</div>
        <div class="description">It uses utility classes</div>
        <div class="button">Learn more</div>
    </bs-jumbotron>
      <h1>{{ title }}</h1>
      <img src="{{ imageUrl }}"/>
      <button
          class="btn btn-primary"
          [disabled]="!isValid"
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

