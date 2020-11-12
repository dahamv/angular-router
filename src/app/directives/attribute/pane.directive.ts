import { Directive, Input } from '@angular/core';

@Directive({
  // Here no brackets. Why?. Brackets define a CSS attribute selector
  selector: 'appPane'
})
export class PaneDirective {
  /**
   * ! is non-null assertion operator. It is a way to tell the compiler "this expression cannot be null or undefined here,
   * so don't complain about the possibility of it being null or undefined."
   */
  @Input() id!: string;
}
