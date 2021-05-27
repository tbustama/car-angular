import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  status: string = 'status of the mouse';
  name: string;
  model: string;
  color: string;

  onAddName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  onAddModel(event: Event) {
    this.model = (<HTMLInputElement>event.target).value;
  }

  onAddColor(event: Event) {
    this.color = (<HTMLInputElement>event.target).value;
  }

  onSubmitCar() {
    console.log(this.name);
    console.log(this.model);
    console.log(this.color);
  }
  constructor() {}

  // onMouseEnter() {
  //   this.status = 'Mouse has entered the div';
  // }
  // onMouseLeave() {
  //   this.status = 'Mouse has left the div';
  // }

  // alertOnClick(event: MouseEvent) {
  //   console.log(event);
  //   alert(`I was clicked on x: ${event.clientX} and y: ${event.clientY}`);
  // }

  ngOnInit(): void {}
}
