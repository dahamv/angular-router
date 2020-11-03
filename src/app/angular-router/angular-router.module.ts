import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRouterRoutingModule } from './angular-router-routing.module';
import { AnglularRouterComponent } from './anglular-router.component';


@NgModule({
  declarations: [AnglularRouterComponent],
  imports: [
    CommonModule,
    AngularRouterRoutingModule
  ]
})
export class AngularRouterModule { }
