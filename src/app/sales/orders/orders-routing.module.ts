import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from '../orders/orders.component';
import { OrdersModule } from './orders.module';


const routes: Routes = [
    //pass customerId as a route parameter. OrdersComponenet can get the parameter through ActivatedRoute service.
    { path: 'orders/:id', component: OrdersComponent }
];

@NgModule({
      imports: [ RouterModule.forChild(routes) ],
      exports: [ RouterModule]

})
export class OrdersRoutingModule { }
