import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';
/**
 * Without resolver, CrisisDetailComponenet is loaded before data is ready.
 * With resolver, the componenet is loaded after the data is ready. And router will cancel navigation if there is no data - eg. /crisis-detail/5
 * NOTE: the following three important points:
 *   1. The router's Resolve interface is optional. The CrisisDetailResolverService doesn't inherit from a base class.
 *      The router looks for that method and calls it if found.
 *   2. The router calls the resolver in any case where the the user could navigate away so you don't have to code for each use case.
 *   3. Returning an empty Observable in at least one resolver will cancel navigation.
 */
@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private crisisService: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    console.log('resolve() called')
    const id = route.paramMap.get('id');

    //subscribing to the returned Observable<Crisis> is done by the Router.
    return this.crisisService.getCrisis(id).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else { // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
