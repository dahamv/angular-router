import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //To see how ngOnChange (in child componenet) works
  data1 = 0;
  data2 = 0;
  change1FromParent(){
    this.data1 += 1;
  }
  change2FromParent(){
    this.data2 += 1;
  }

  //To see how ngModel works
  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }

  //To see how two way databinding works
  fontSizePx = 16;
}
