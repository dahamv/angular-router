import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },  //crisis-center routing handled by its feature componenet.
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  //By re-exporting the RouterModule here, the components declared in AppModule
  //have access to router directives such as RouterLink and RouterOutlet.
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
