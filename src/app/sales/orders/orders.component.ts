import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';
import { IOrder, ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;
  //Activeated route is the current URL
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //If the componenet stays on the screen visible while the URL changes you can subscribe to paramMap Observable as
    //let id = this.route.paramMap.subscribe(...);
    //But in this case we only need to get the customerId once so use snapshot.
    //The + is similar to parseInt and converts string to a number.
    let id = +this.route.snapshot.paramMap.get('id');
    console.log('cust id is: '+id);
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });

    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });
  }

}
