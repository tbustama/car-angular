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
  disabled: boolean = true;

  getTheColor(color: string) {
    if (color !== 'default') {
      this.color = color;
      return this.color;
    } else {
      return this.color;
    }
  }

  date() {
    return Date.now();
  }

  constructor() {
    setTimeout(() => {
      this.target = '_self';
      this.disabled = !this.disabled;
    }, 2000);
  }

  ngOnInit(): void {}
}
