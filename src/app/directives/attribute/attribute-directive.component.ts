import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SharkDirective } from './shark.directive';
import { ChildComponent } from './child/child.component';
import { PaneDirective } from './pane.directive';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html'
})
export class AttributeDirectiveComponent implements AfterViewInit {

  // 1) @ViewChild with DOM Element <input> -> reference variable #seaCreatureInput
  @ViewChild('seaCreatureInput') seaCreatureInput: ElementRef;

 // 2) @ViewChild to call Child component method
  valueFromChild : string = "Some Value";
  @ViewChild(ChildComponent) child: ChildComponent;

 // 3) Hightligh Directive
  color: string;

  // 5) Shark Derective - using @ViewChild  as a setter
  refFromSharkDirective : string = "Default Value";
  sharkDirective: SharkDirective;

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.sharkDirective = directive;
  };

  // 6) Pane Directive - Using @ViewChildren with Directive
  shouldShow = false;
  serializedPanes: string = '';
  @ViewChildren(PaneDirective) panes!: QueryList<PaneDirective>;



  /**
   * NOTE: we wait for the AfterViewInit lifecycle hook to access our variable,
   * as this is when child components and directives become available.
   */
  ngAfterViewInit() {

    // 1) Setting the reference variable
    this.seaCreatureInput.nativeElement.value = 'Whale!';
    // 2)
    setTimeout(() => this.valueFromChild = this.child.whoAmI());

    // 5)
    setTimeout(() => this.refFromSharkDirective = this.sharkDirective.creature);
    // 6)
    this.calculateSerializedPanes(); //showing only 3 pane value
    this.panes.changes.subscribe(() => {
      this.calculateSerializedPanes(); // recalculate to show the 4th value
    });
  }

  calculateSerializedPanes() {
    setTimeout(() => {
      this.serializedPanes = this.panes.map(p => p.id).join(', ');
    });
  }

  show() {
    this.shouldShow = true;
  }

}
