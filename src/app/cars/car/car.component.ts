import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarComponent implements OnInit {
  name: string = 'Ford';
  model: string = 'F-150';
  color: string = 'Black';
  linkto: string = '/to/car/view';
  target: string = '_blank';
  disabled: boolean = false;
  theDate = Date.now();

  getTheColor(color: string) {
    if (color !== 'default') {
      this.color = color;
      return this.color;
    } else {
      return this.color;
    }
  }

  date() {
    return this.theDate;
  }

  constructor() {
    setTimeout(() => {
      this.target = '_self';
    }, 2000);
  }

  ngOnInit(): void {}
}
