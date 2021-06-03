import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[simpleAttr]',
})
export class SimpleAttrDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log(this.el.nativeElement.style.backgroundColor);
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
