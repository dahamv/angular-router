import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
//   {
//   //shown in AppComponenet <router-outlet>
//   /**
//    * changing /heroes to /superheroes
//    * Redirects
//    * ----------
//    * Redirects are useful when you want /heroes to work as well
//    * The Router also supports query parameters and the fragment when using redirects.
//    * Using /heroes and /hero in routerLink (AppComponenet and HeroListComponenet templates) works. But docs say no
//    * https://angular.io/guide/router-tutorial-toh#changing-heroes-to-superheroes
//    * But this.router.navigate(['/heroes' .....) in HeroDetailComponenet doesn't work.
//    */
//   path:'angular-router/heroes',
//   children: [
//   // { path: 'heroes/:id', redirectTo: '/superheroes/:id' },
//   // { path: 'heroes', redirectTo: '/superheroes' },
//   // { path: 'hero/:id', redirectTo: '/superhero/:id' },

//   { path: '',  component: HeroListComponent, data: { animation: 'HeroesPage' } },
//   //Add HerosPage animation to this path as well since this is considered as a seperate route
//   { path: ':id', component: HeroListComponent, data: { animation: 'HeroesPage' } },
//   { path: 'hero/:id', component: HeroDetailComponent, data: { animation: 'HeroPage' } }
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
