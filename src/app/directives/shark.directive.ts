import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {
  creature = 'Dolphin';

  constructor(el: ElementRef, renderer: Renderer2) {
    let shark = renderer.createText('Shark ');
    el.nativeElement.style.color = "green";
    renderer.appendChild(el.nativeElement, shark);
  }
}
