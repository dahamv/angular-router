import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FontSizerComponent } from './child-font-sizer/font-sizer.component';
import { ParentChildComponent } from './parent-child.component';
import { ParentChildRoutingModule } from './parent-child-routing.module';

@NgModule({
  declarations: [ParentComponent, ChildComponent, FontSizerComponent, ParentChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    ParentChildRoutingModule
  ],
  exports: [ ParentComponent ]
})
export class ParentChildModule { }
