import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html'
})
/**
 * This is the root of the crisis center area, just as AppComponent is the root of the entire application.
 * Acts as a shell for the crisis management feature area, just as the AppComponent is a shell to manage the high-level workflow.
 * Like most shells, the CrisisCenterComponent class is minimal because it has no business logic, and its template has no links,
 * just a title and <router-outlet> for the crisis center child component.
 */
export class CrisisCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
