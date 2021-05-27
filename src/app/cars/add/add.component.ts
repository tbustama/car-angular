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

  onSubmitCar() {
    console.log(this.name);
    console.log(this.model);
    console.log(this.color);
  }
  constructor() {}

  ngOnInit(): void {}
}
