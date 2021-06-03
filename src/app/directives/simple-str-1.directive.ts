import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appSimpleStr1]',
})
export class SimpleStr1Directive implements OnInit {
  @Input() set appSimpleStr1(value: boolean) {
    if (value) {
      // ATTACH ELEMENT TO DOM
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  } // The VALUE

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}
}
