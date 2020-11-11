import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styles: [
  ]
})
export class NgModelComponent implements OnInit {

  currentItem: Item;
  name: string = '';

  constructor() {
    this.currentItem = new Item(null,'Teapot','stout')
  }

  ngOnInit(): void {
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  setNameValue() {
    this.name = 'Nancy';
  }
}

export class Item {

  constructor(
    public id?: number,
    public name?: string,
    public feature?: string
    ) {
  }
}
