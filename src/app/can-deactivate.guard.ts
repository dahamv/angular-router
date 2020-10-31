import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { DialogService } from './dialog.service';


/**
 * ***********************************************Method 1******************************************************
 * This is a reusable CanActivate guard. With this, the canDeactivate() in CrisisDetailComponenet will be called.
 * The interface CanDeactivate<unknown> takes any componenet that has canDeactivate() method.
 */
@Injectable({
  //Without this there will be the Error: NullInjectorError: No provider for CanDeactivateGuardReusable
  providedIn: 'root'
})
export class CanDeactivateGuardReusable implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    console.log("Guard Reusable canDeactivate() hit");
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

//Since Angular doen't compile interfaces, CrisisDetailComponenet doesn't have to implement this.
//It should just have the canDeactivate() method.
export interface CanComponentDeactivate {
  //canDeactivate is a function that returns an Observable ...
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


/**
 * **********************************************Method 2*******************************************************
 */


@Injectable({
  //Without this there will be the Error: NullInjectorError: No provider for CanDeactivateGuard
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {

  /**
   * This method is called when CanDeactivateGuard is used in CrisesCenterRoutingModule
   */
  canDeactivate(component: CrisisDetailComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | boolean {
    // Get the Crisis Center ID
    console.log(route.paramMap.get('id'));

    // Get the current URL
    console.log(state.url);

    // Allow synchronous (i.e. not an Observable) navigation (`true` - boolean) if no crisis or the crisis is unchanged
    if (!component.crisis || component.crisis.name === component.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return component.dialogService.confirm('Discard changes?');
  }
}



