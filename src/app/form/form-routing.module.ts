import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { HeroFormComponent } from './template-driven/hero-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form.component';

const routes: Routes = [
  { path: '',
    component: FormComponent,
    children: [
              {
                path: 'template-driven',
                component: HeroFormComponent,
              },
              {
                path: 'reactive',
                component: ReactiveFormComponent,
              }
            ]
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
