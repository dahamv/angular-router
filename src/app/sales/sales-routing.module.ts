import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    // //The root(www.domain..) of the website should be redirected to /customers
    { path: '', pathMatch: 'full', redirectTo: '/customers'},
    //{ path: 'orders/:id', component: OrdersComponent },
    // // domain/** should also be routed to /customers
    { path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  //You only call forRoot one time in an application.
  imports: [RouterModule.forChild(routes)],
   //So that any module which imports app-routing module has access to RouterModule and use <router-outlet>
  exports: [RouterModule]
})
export class SalesRoutingModule { }
