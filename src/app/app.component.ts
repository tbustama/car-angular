import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'car-practice';
  artist: string = 'Jon Pardi';

  show: boolean = true;
  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
  changeArtist() {
    this.artist = 'Riley Green';
  }
}
