import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './cars/add/add.component';

@NgModule({
  declarations: [AppComponent, CarsComponent, CarComponent, HeaderComponent, AddComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
