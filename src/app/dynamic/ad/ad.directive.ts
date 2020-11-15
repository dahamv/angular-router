import { Directive, ViewContainerRef } from '@angular/core';
/**
 * Before you can add components you have to define an anchor point to tell Angular where to insert components.
 * The ad banner uses this helper directive to mark valid insertion points in the template.
 */
@Directive({
  //adHost is what you use to apply the directive to the element.
  selector: '[adHost]'
})
export class AdDirective {
  // ViewContainerRef is needed to gain access to the view container of the element that will host the dynamically added component.
  constructor(public viewContainerRef: ViewContainerRef) { }
}
