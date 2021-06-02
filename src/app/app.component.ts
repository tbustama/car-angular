import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'car-practice';
  artist: string = 'Jon Pardi';

  list: [number, number, number, number, number] = [1, 2, 3, 4, 5];

  show: boolean = true;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
  changeArtist() {
    this.artist = 'Riley Green';
  }

  getColor() {
    return 'yellow';
  }
}
