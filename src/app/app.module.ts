import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './cars/add/add.component';
import { LifeComponent } from './life/life.component';
import { SimpleAttrDirective } from './directives/simple-attribute.directive';
import { SimpleAttr2Directive } from './directives/simple-attr-2.directive';
import { SimpleStr1Directive } from './directives/simple-str-1.directive';
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HeaderComponent,
    AddComponent,
    LifeComponent,
    SimpleAttrDirective,
    SimpleAttr2Directive,
    SimpleStr1Directive,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
