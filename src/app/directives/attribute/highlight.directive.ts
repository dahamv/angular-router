import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  // The brackets define a CSS attribute selector
  //[foo] selects any element with an attribute named foo
  selector: '[appHighlight]',
  exportAs: 'highlightExportAs'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @HostBinding('style.background-color') backgroundColor: string;

  //How appHighlight is bound to the alias highlightColor
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('Beige');
  }

  highlight(color: string) {
    this.el.nativeElement.style.color = 'Blue';
    this.backgroundColor = color;
  }
}
