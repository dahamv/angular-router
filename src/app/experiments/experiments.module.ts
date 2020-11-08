import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, SizerComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ ParentComponent ]
})
export class ExperimentsModule { }
