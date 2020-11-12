import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
/**
 * OPPOSITE OF NgIF.
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({
  // The brackets define a CSS attribute selector
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
