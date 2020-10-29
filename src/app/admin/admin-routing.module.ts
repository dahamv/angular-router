import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';

//Compare with CrisisCenterRouterModule
const adminRoutes: Routes = [
  {
    path: 'admin',
    //shown in AppComponenet <router-outlet>
    component: AdminComponent,
    //canActivate guard is enough to guard AdminComponenet + all its child componenets.
    canActivate: [AuthGuard],
    //shown in AdminComponent <router-outlet>
    children: [
      {
        path: '',
        // Unlike crisis-componenet-routes, this is not using a component. This defines a component-less route.
        // ADDITIONALLY, a component-less route makes it easier to guard child routes. See how the following are guarded. ??? Not sure what this means
        // canActivateChild is needed only if child components require different Auth guarding.
        canActivateChild: [AuthGuard],
        // So the below routes use the AdminComponenet <router-outlet>
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
