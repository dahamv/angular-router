import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html'
})
export class FilterTextboxComponent implements OnInit {

  private _filterString: string;

  constructor() { }

  ngOnInit(): void {
  }

  //When this.filterString is refered to, this method gets called.
  //Not very useful though. you can call this._filterString
  get filterString() {
      return this._filterString;
  }

  //So that ngModel can set filterString
  @Input() set filterString(val: string) {
      this._filterString = val;
      //Raise changed event so that parent customers-list can grab that event using $event
      //<app-filter-textbox (changed)="filter($event)"></app-filter-textbox>
      this.changed.emit(this.filterString);
  }
  //so that
  setFilterString(val: string) {
      this._filterString = val;
      this.changed.emit(this.filterString);
  }
  //This creates a new event named changed so that a parent componenet can bind to that event as
  // <app-filter-textbox (changed)='someFunctionInParent()'></app-filter-textbox>
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
}
