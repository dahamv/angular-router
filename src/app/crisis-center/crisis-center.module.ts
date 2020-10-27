import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisesCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //Now the above declared components have access to router directives such as RouterLink and RouterOutlet.
    CrisesCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
