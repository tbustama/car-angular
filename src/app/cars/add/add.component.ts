import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ContentChild,
  ElementRef,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit, AfterContentInit {
  @ContentChild('contentApp', { static: true }) contentDiv: ElementRef;
  @Output()
  title = new EventEmitter<{ titles: string }>();
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

  onSubmitCar(ref) {
    this.carSubmitted.emit(this.userData);
    // console.log(ref.value);
  }
  constructor() {}

  ngOnInit(): void {
    this.title.emit({ titles: 'This is the car title' });
  }

  ngAfterContentInit(): void {
    // console.log(this.contentDiv.nativeElement);
  }
}
