import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes',  component: HeroListComponent, data: { animation: 'HeroesPage' } },
  //Add HerosPage animation to this path as well since this is considered as a seperate route
  { path: 'heroes/:id', component: HeroListComponent, data: { animation: 'HeroesPage' } },
  { path: 'hero/:id', component: HeroDetailComponent, data: { animation: 'HeroPage' } }
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
