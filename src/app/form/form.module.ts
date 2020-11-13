import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { HeroFormComponent } from './template-driven/hero-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './reactive/name-editor/name-editor.component';
import { ReactiveFormComponent } from './reactive/reactive-form.component';
import { ProfileEditorComponent } from './reactive/profile-editor/profile-editor.component';


@NgModule({
  declarations: [FormComponent, HeroFormComponent, NameEditorComponent, ReactiveFormComponent, ProfileEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
