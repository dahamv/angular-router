import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {

  constructor() { }

  whoAmI() {
    return 'I am a child component!';
  }
}
