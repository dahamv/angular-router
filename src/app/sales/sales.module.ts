import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module'
import { SalesComponent } from './sales.component';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { SalesRoutingModule } from './sales-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    //importing core module from app module is enough since its the root module.
    //No need other modules import core module.
    CoreModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    //Where the routes are defined.
    //IMPORTANT: ApproutingModule should be imported after the Customers and Orders Modules
    //since those modules have child routes which can get overridden.
    SalesRoutingModule
  ]
})
export class SalesModule { }
