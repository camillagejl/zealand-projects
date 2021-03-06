import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {ProductComponent} from './product.component';
import {ProductsComponent} from './products.component';
import {AdvertisementsComponent} from './advertisements.component';
import {StarComponent} from './star.component';
import {StarfillComponent} from './starfill.component';
import {RatingComponent} from './rating.component';
import {TruncatePipe} from './truncate.pipe';
import {BsJumbotronComponent} from './bs-jumbotron.component';

@NgModule({
  declarations: [
    AppComponent, StarComponent, StarfillComponent, RatingComponent, ProductComponent, ProductsComponent,
    AdvertisementsComponent, TruncatePipe, BsJumbotronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
