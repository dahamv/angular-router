import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

const routes: Routes = [
  { path: 'crises',  component: CrisisListComponent, data: { animation: 'HeroesPage' } },
  { path: 'crisis/:id', component: CrisisDetailComponent, data: { animation: 'HeroPage' } }
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisesRoutingModule { }
