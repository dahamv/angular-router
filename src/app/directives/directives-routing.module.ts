import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives.component';
import { AttributeDirectiveComponent } from './attribute/attribute-directive.component';
import { NgModelComponent } from './ng-model/ng-model.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivesComponent,
    children: [
          {
            path: 'attribute',
            component: AttributeDirectiveComponent,
          },
          {
            path: 'ng-model',
            component: NgModelComponent,
          }
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
