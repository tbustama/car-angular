import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @Output() title = new EventEmitter<{ titles: string }>();
  @Output() carSubmitted = new EventEmitter<{
    name: string;
    model: string;
    color: string;
  }>();

  userData: { name: string; model: string; color: string } = {
    name: '',
    model: '',
    color: '',
  };

  onSubmitCar() {
    this.carSubmitted.emit(this.userData);
  }
  constructor() {}

  ngOnInit(): void {
    this.title.emit({ titles: 'This is the car title' });
  }
}
