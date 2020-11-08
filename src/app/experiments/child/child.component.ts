import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit ,  OnChanges{

  constructor() { }

  ngOnInit(): void {
  }

  //to see how ngOnChange works.
  @Input() firstParentInput: number;
  @Input() secondParentInput: number;

  change1FromChild() {
  this.firstParentInput -= 1;
  }

  change2FromChild() {
  this.secondParentInput -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
      for (const propName in changes) {
          if (changes.hasOwnProperty(propName)) {
          let change = changes[propName];
          switch (propName) {
              case 'firstParentInput': {
              console.log(`firstParentInput changed to:`, change.currentValue);
              break;
              }
              case 'secondParentInput': {
              console.log(`secondParentInput changed to:`, change.currentValue);
              break;
              }
          }
          }
      }
  }
}
