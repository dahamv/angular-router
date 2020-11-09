import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { SharkDirective } from './shark.directive';
import { ChildComponent } from './child/child.component';
import { PaneDirective } from './pane.directive';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [
  ]
})
export class DirectivesComponent implements AfterViewInit {

  // 2)
  refFromSharkDirective : string = "Default Value";
  changeRefFunction ;
  // 3)
  valueFromChild : string = "Some Value";
  // 4)
  shouldShow = false;
  serializedPanes: string = '';


  // 1) Using @ViewChild with a with DOM Element <input> -> reference variable #seaCreatureInput
  @ViewChild('seaCreatureInput') seaCreatureInput: ElementRef;

  // 2) Using @ViewChild with Directives -> as a setter
  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    const curriedFuntion = (val) => () => { setTimeout(() => this.refFromSharkDirective = val )};
    this.changeRefFunction= curriedFuntion(directive.creature);
  };

  // 3) Using @ViewChild with a ChildComponenet
  @ViewChild(ChildComponent) child: ChildComponent;

  // 4) Using @ViewChildren with Directive
  @ViewChildren(PaneDirective) panes!: QueryList<PaneDirective>;



  /**
   * NOTE: we wait for the AfterViewInit lifecycle hook to access our variable,
   * as this is when child components and directives become available.
   */
  ngAfterViewInit() {

    // 1) Setting the reference variable
    this.seaCreatureInput.nativeElement.value = 'Whale!';
    // 2)
    this.changeRefFunction();
    // 3)
    setTimeout(() => this.valueFromChild = this.child.whoAmI());

    // 4)
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
