import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SelectivePreloadingStrategyService } from './tour-of-heroes/selective-preloading-strategy.service';
import { PageNotFoundComponent } from './tour-of-heroes/page-not-found/page-not-found.component';

// AppModule is eagerly loaded. i.e. loaded right away when the app starts.
const appRoutes: Routes = [
  {path: 'jokes', loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule)},
  {path: 'dynamic', loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule)},
  {path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)},
  {path: 'parent-child', loadChildren: () => import('./parent-child/parent-child.module').then(m => m.ParentChildModule)},
  {path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)},
  {path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule)},
  { path: '',   redirectTo: '/toh/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        //enableTracing: true, // <-- Can see all the route logs in console. debugging purposes only

        /**
         * This configures the Router preloader to immediately load all lazy loaded routes (routes with a loadChildren property).
         * When you visit http://localhost:4200, the /heroes route loads immediately upon launch and
         * the router starts loading the CrisisCenterModule right after the HeroesModule loads.
         * Note:
         * The PreloadAllModules strategy does not load feature areas protected by a CanLoad guard.
         */

         // preloadingStrategy: PreloadAllModules

        /**
         * Change preloadingStratergy to the custom stratergy SelectivePreloadingStrategyService.
         * Now routes with data: { myAppPreload: true } property will only be preloaded.
         */
         preloadingStrategy: SelectivePreloadingStrategyService
      }

    )
  ],
  //By re-exporting the RouterModule here, the components declared in AppModule
  //have access to router directives such as RouterLink and RouterOutlet.
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
