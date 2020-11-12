import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  //Brackets define a CSS attribute selector
  selector: '[appWordLengthDetector]'
})
export class WordLengthDetectorDirective implements OnChanges{

  constructor(private el: ElementRef) {
    console.log(el.nativeElement.value);
  }

  // Listen for keyup event and change background color
  @HostListener("window:keyup") ngOnChanges(event) {

    let count = this.el.nativeElement.value.length
    console.log(this.el.nativeElement.value.length);
    if(count < 5) {
        this.el.nativeElement.style.backgroundColor = 'red'
    } else if(count >= 5 && count <= 10) {
        this.el.nativeElement.style.backgroundColor = 'green'
    } else if(count > 10) {
        this.el.nativeElement.style.backgroundColor = 'purple'
    }
  }
}
