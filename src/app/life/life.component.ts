import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css'],
})
export class LifeComponent implements OnInit, OnChanges {
  @Input() artist: string;
  constructor() {
    console.log('Constructor !!!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng On changes', changes);
  }

  ngOnInit(): void {
    console.log('NG on it');
  }
}
