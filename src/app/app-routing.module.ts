import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
// AppModule is eagerly loaded. i.e. loaded right away when the app starts.
const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },  //crisis-center routing handled by its feature componenet.
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  /**
   * admin route is moved here from AdminRoutingModule to do lazy loading.
   * Now the root AppModule must neither load nor reference the AdminModule or its files.
   * add the AuthGuard to the canLoad property.
   * Note:
   * 1) import() returns a Promise that resolves an object that contains the NgModule, in this case the AdminModule.
   *    When the router navigates to this route, it uses the loadChildren string to dynamically load the AdminModule.
   *    Then it adds the AdminModule routes to its current route configuration. Finally, it loads the requested route to the
   *    destination admin component.
   * 2) The lazy loading and re-configuration happen just once, when the route is first requested;
   *    the module and routes are available immediately for subsequent requests.
   * */
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  /**
   * You could lazy load the Crisis Center. But you're almost certain that the user will visit the Crisis Center within minutes of launching the app.
   * Ideally, the app would launch with just the AppModule and the HeroesModule loaded and then, almost immediately,
   * load the CrisisCenterModule in the background. By the time the user navigates to the Crisis Center, its module will have been loaded and ready.
   * The Router offers two preloading strategies:
   *   1) No preloading, which is the default. Lazy loaded feature areas are still loaded on-demand.
   *   2) Preloading of all lazy loaded feature areas. Configured in the forRoot() method below.
   *   *) The Router also supports custom preloading strategies for fine control over which modules to preload and when.
   */
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: { myAppPreload: true } //you can add anything to the data property of the route.
  },
  /**
   * AuthModule is also lazy loaded. But it will not be preloaded like CrisisCenterModule.
   */
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  /**
   * HeroesModule should be eargerly loaded since its the first page.
   * You can't have redirectTo: '/heroes' because the Router handles redirects once at each level of routing configuration.
   * This prevents chaining of redirects, which can lead to endless redirect loops.
   */
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
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
  ],
  providers: [
    //???????? You dont need this since the service is providedIn: root ???????
    //Provide this service so that it can be injected elsewhere in the app. (AdminDashboardComponent)
    //SelectivePreloadingStrategyService
  ]
})
export class AppRoutingModule {}
