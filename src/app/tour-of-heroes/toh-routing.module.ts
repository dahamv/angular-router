import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { TourOfHeroesComponent } from "./toh.component"
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
// TourOfHeroesModule is eagerly loaded. i.e. loaded right away when the app starts.
const appRoutes: Routes = [

       {
        path: 'toh',
        //shown in AnglularRouterComponent <router-outlet>
        component: TourOfHeroesComponent,
        /**
        * CrisisCenterComponent <router-outlet> loads the child componenet CrisisListComponent.
        * not in the RouterOutlet of the AppComponent shell.
        */
        children: [
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
             * shown in TourOfHeroesComponenet <router-outlet>
             * changing /heroes to /superheroes
             * Redirects
             * ----------
             * Redirects are useful when you want /heroes to work as well
             * The Router also supports query parameters and the fragment when using redirects.
             * Using /heroes and /hero in routerLink (AppComponenet and HeroListComponenet templates) works. But docs say no
             * https://angular.io/guide/router-tutorial-toh#changing-heroes-to-superheroes
             * But this.router.navigate(['/heroes' .....) in HeroDetailComponenet doesn't work.
             *
             * NOTE: Redirecting is supported for only one level. To prevent the possibility of endless redirect loops.
             * NOTE: in child module routes, you shouldn't have the leading '/' like redirectTo: '/superheroes/:id'. Remove '/'
             */
            { path: 'heroes/:id', redirectTo: 'superheroes/:id' },
            { path: 'heroes', redirectTo: 'superheroes' },
            { path: 'hero/:id', redirectTo: 'superhero/:id' },
            /**
             * With Eager Loading, we cannot move Heroes routing configuration into the Heroes module (grand child).
             * Couldn't get an ansewer for my question
             * https://stackoverflow.com/questions/64696851/proper-route-configuration-for-eager-loading-grand-child-components-angular-10
             */
            { path: 'superheroes',  component: HeroListComponent, data: { animation: 'HeroesPage' } },
            //Add HerosPage animation to this path as well since this is considered as a seperate route
            { path: 'superheroes/:id', component: HeroListComponent, data: { animation: 'HeroesPage' } },
            { path: 'superhero/:id', component: HeroDetailComponent, data: { animation: 'HeroPage' } }


           // { path: '',   redirectTo: 'superheroes', pathMatch: 'prefix' }
        ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)
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
export class TourOfHeroesRoutingModule { }
