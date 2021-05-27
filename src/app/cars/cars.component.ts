import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsComponent implements OnInit {
  carValues: { name: string; model: string; color: string } = {
    name: 'Ford',
    model: 'F-150',
    color: 'Space Grey',
  };

  constructor() {}

  ngOnInit(): void {}
}
