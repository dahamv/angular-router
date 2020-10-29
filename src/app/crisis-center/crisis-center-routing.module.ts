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
    //shown in AppComponenet <router-outlet>
    component: CrisisCenterComponent,
    /**
     * CrisisCenterComponent <router-outlet> loads the child componenet CrisisListComponent.
     * not in the RouterOutlet of the AppComponent shell.
     */
    children: [
      {
        path: '',
        component: CrisisListComponent,
        /**
         * The CrisisListComponent <router-outlet> loads the below two child componenets.
         */
        children: [
          {
            //To navigate to the CrisisDetailComponent for a crisis with id=2, the full URL is /crisis-center/2 (/crisis-center + '' + '/2').
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            //To navigate to the CrisisCenterHomeComponent, the full URL is /crisis-center (/crisis-center + '' + '').
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
