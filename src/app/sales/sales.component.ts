import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.styles.scss']
})
export class SalesComponent implements OnInit {

  title: string;

  ngOnInit(): void {
    this.title = 'Sales Componenet';
  }
}
