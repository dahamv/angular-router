import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [OrdersComponent],
  imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule ]
})
export class OrdersModule { }
