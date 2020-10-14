// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { ComposeMessageComponent } from './compose-message/compose-message.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { AuthGuard } from './auth/auth.guard';
// import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

// const appRoutes: Routes = [
//   {
//     path: 'compose',
//     component: ComposeMessageComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'admin',
//     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
//     canLoad: [AuthGuard]
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
//     data: { preload: true }
//   },
//   //The default route is the heros component.
//   //the router should select the route to the HeroListComponent only when the entire URL matches '', so set the pathMatch value to 'full'.
//   //Explanation of pathMatch: https://stackoverflow.com/questions/42992212/in-angular-what-is-pathmatch-full-and-what-effect-does-it-have
//   { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
//   //path ** matches anything (sd/se/sdfe/sdfsdf) so no need of pathMatch: full
//   { path: '**', component: PageNotFoundComponent }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(
//       appRoutes,
//       {
//         enableTracing: false, // <-- debugging purposes only
//         preloadingStrategy: SelectivePreloadingStrategyService,
//       }
//     )
//   ],
//   //By re-exporting the RouterModule here, the components declared in AppModule
//   //have access to router directives such as RouterLink and RouterOutlet.
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule { }


// /*
// Copyright Google LLC. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at http://angular.io/license
// */
