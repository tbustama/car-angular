import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css'],
})
export class LifeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() artist: string;
  constructor() {
    console.log('Constructor !!!');
  }
  // only triggered by changes to bound properties
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng On changes', changes);
  }

  ngOnInit(): void {
    console.log('NG on init');
  }

  // triggered during every change
  ngDoCheck(): void {
    console.log('NG do check!');
  }

  ngAfterContentInit(): void {
    console.log('NG content init');
  }

  ngAfterContentChecked(): void {
    console.log('NG after content checked');
  }
  ngAfterViewInit(): void {
    console.log('After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('After View Checked');
  }

  ngOnDestroy(): void {
    console.log('Destroyed!');
  }
}
