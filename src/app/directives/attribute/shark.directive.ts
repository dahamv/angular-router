import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //Brackets define a CSS attribute selector
  selector: '[appShark]'
})
export class SharkDirective {
  creature = 'Dolphin';

  //Adding Shark to the Element
  constructor(el: ElementRef, renderer: Renderer2) {
    let shark = renderer.createText('Shark ');
    el.nativeElement.style.color = "orange";
    renderer.appendChild(el.nativeElement, shark);
  }
}
