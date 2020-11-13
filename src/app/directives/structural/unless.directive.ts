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

  /**
   * The directive consumer (the <p>) expects to bind a true/false condition to [appUnless]. That means the directive needs an appUnless property, decorated with @Input
   * Nobody reads the appUnless property so it doesn't need a getter.
   * Angular sets the appUnless property whenever the value of the condition changes
   */
  @Input() set appUnless(condition: boolean) {
    //If the condition is falsy and the view hasn't been created previously, tell the view container to create the embedded view from the template.
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    //If the condition is truthy and the view is currently displayed, clear the container which also destroys the view.
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
