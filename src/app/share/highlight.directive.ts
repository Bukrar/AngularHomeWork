import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(ele: ElementRef) {
    ele.nativeElement.style.backgroundColor = 'yellow'
  }

}


