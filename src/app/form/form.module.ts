import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormComponent, HeroFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
