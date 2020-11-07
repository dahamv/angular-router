import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class SalesComponent implements OnInit {

  title: string;

  ngOnInit(): void {
    this.title = 'Sales Componenet';
  }
}
