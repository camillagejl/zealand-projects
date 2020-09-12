import { Component } from '@angular/core';
import { AdvertisementService} from './advertisement.service';

@Component({
  selector: 'advertisements',
  template: `
      <h2>Advertisements</h2>
  <ul>
      <li *ngFor="let product of products">
          {{ product }}
      </li>
  </ul>
  `
})
export class AdvertisementsComponent{
  products;

  constructor(advertisementService: AdvertisementService) {
    this.products = advertisementService.getAdvertisements();
  }
}
