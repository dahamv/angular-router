import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

const routes: Routes = [

];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  //Need to export RouterModule since customers-list uses routerLink
  exports: [ RouterModule ]
})
export class CustomersRoutingModule { }
