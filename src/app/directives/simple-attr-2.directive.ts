import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Directive({
  selector: '[appSimpleAttr2]',
})
export class SimpleAttr2Directive implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // STYLE
    const flags = RendererStyleFlags2.DashCase | RendererStyleFlags2.Important;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue', flags);

    // ADD A CLASS
    this.renderer.addClass(this.el.nativeElement, 'poop');

    // ADD A CHILD
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Look at this child');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);

    // SET ATTRIBUTE
    this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', 'true');
  }
}
