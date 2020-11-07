import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    //To store the original Customer array
    private _customers: ICustomer[] = [];
    filteredCustomers : ICustomer[] = [];
    customersOrderTotal : number;
    currencyCode : string = 'USD';
    constructor(private sorterService : SorterService) { }

    ngOnInit(): void { }

    calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });
    }

    sort(prop) {
    	this.sorterService.sort(this.filteredCustomers, prop);
    }

    filter(data: string) {
      if (data) {
          this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
              //Check if customers[] have what the use types in filter-textbox.
              //If so assign the resutting filtered array to filteredCustomers array
              return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                      cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                      cust.orderTotal.toString().indexOf(data) > -1;
          });
      } else {
          this.filteredCustomers = this.customers;
      }
      //Since filtered customeres array changed, recalculate orders.
          this.calculateOrders();
    }

    //Without using ngOnChange we can use getters and settes to create an input property 'customers'
    // get is called when this.customers is called.
    get customers(): ICustomer[] {
        return this._customers;
    }

    //@input is needed since the parent componenet (customers) calls the set method as <app-customers-list [customers]="people" ..>
    @Input() set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }
}
