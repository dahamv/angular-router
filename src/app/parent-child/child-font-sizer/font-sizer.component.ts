import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['../parent-child.component.scss']
})
export class FontSizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //for [(x)] to work both the property called x and a corresponding event named xChange must be there.
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    //Send the changed size to the parent so that parent can update its fontSizePx variable with both -
    //<app-sizer (sizeChange)="fontSizePx=$event"></app-sizer> and
    //<app-sizer [(size)]="fontSizePx"></app-sizer>
    this.sizeChange.emit(this.size);
  }

}
