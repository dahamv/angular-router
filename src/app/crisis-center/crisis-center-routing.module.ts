import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

/** What was before.....
* const routes: Routes = [
*   { path: 'crises',  component: CrisisListComponent, data: { animation: 'HeroesPage' } },
*   { path: 'crisis/:id', component: CrisisDetailComponent, data: { animation: 'HeroPage' } }
* ];
*/

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    /**
     * The router displays the components of these routes in the RouterOutlet of the CrisisCenterComponent,
     * not in the RouterOutlet of the AppComponent shell.
     */
    children: [
      {
        path: '',
        component: CrisisListComponent,
        /**
         * The <router-outlet> in crisis-list.componenet.html loads the below child componenets.
         */
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  /**
   * Since crisis-center-module imports this router module, the componenets declared there
   * have access to router directives such as RouterLink and RouterOutlet.
   */
  exports: [RouterModule]
})
export class CrisesCenterRoutingModule { }
