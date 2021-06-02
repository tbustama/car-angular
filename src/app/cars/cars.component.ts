import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsComponent implements OnInit, AfterViewInit {
  contentValue: string = 'This is the content Value!';
  @ViewChild('anotherDiv', { static: true }) anotherDiv: ElementRef;

  @ViewChild('carComponent', { static: true }) carComponent: Component;

  carValue: { name: string; model: string; color: string }[] = [
    {
      name: 'Ford',
      model: 'F-150',
      color: 'Space Grey',
    },
    {
      name: 'Dodge',
      model: 'Ram',
      color: 'Silver',
    },
    {
      name: 'Ford',
      model: 'Raptor',
      color: 'Black',
    },
  ];

  carWasSubmitted(carData: { name: string; color: string; model: string }) {
    // console.log(carData);
  }

  titleCatch(title: { titles: string }) {
    // console.log(title);
  }

  constructor() {}

  ngOnInit(): void {
    // console.log(this.anotherDiv.nativeElement);
    // console.log(this.carComponent.carValues);
  }

  ngAfterViewInit(): void {
    // console.log(this.carComponent);
  }
}
