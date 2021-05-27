import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarComponent implements OnInit {
  @Input('carElements') carValues: {
    name: string;
    model: string;
    color: string;
  };

  getTheColor(color: string) {
    if (color !== 'default') {
      this.carValues.color = color;
      return this.carValues.color;
    } else {
      return (this.carValues.color = 'Black');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
