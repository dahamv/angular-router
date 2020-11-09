import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [

       {
        path: '',
        //shown in TourOfHeroesComponent <router-outlet>
        component: SalesComponent,
        /**
        * CrisisCenterComponent <router-outlet> loads the child componenet CrisisListComponent.
        * not in the RouterOutlet of the AppComponent shell.
        */
        children: [
              //pass customerId as a route parameter. OrdersComponenet can get the parameter through ActivatedRoute service.
              { path: 'orders/:id', component: OrdersComponent },
              { path: 'customers', component: CustomersComponent }
          ]
        }];
    // //The root(www.domain..) of the website should be redirected to /customers
    //{ path: '', pathMatch: 'full', redirectTo: '/customers'},
    //{ path: 'orders/:id', component: OrdersComponent },
    // // domain/** should also be routed to /customers
    //{ path: '**', pathMatch: 'full', redirectTo: '/customers' }


@NgModule({
  //You only call forRoot one time in an application.
  imports: [RouterModule.forChild(routes)],
   //So that any module which imports app-routing module has access to RouterModule and use <router-outlet>
  exports: [RouterModule]
})
export class SalesRoutingModule { }
