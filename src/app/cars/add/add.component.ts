import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  status: string = 'status of the mouse';
  constructor() {}

  onMouseEnter() {
    this.status = 'Mouse has entered the div';
  }
  onMouseLeave() {
    this.status = 'Mouse has left the div';
  }

  alertOnClick(event: MouseEvent) {
    console.log(event);
    alert(`I was clicked on x: ${event.clientX} and y: ${event.clientY}`);
  }

  ngOnInit(): void {}
}
