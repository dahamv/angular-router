import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, NavigationExtras, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService, private router: Router) {}

    /**
     * The ActivatedRouteSnapshot contains the future route that will be activated and
     * the RouterStateSnapshot contains the future RouterState of the application, should you pass through the guard check.
     * if returns true, user can continue navigation.
     * if returns a UrlTree, user will be redirected to the given url (login page).
     */
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {

        //store the attempted URL the user came from. This should be the redirectURL
        const url: string = state.url;
        console.log("Can canActivate hit "+url);
        //Returning a UrlTree tells the Router to cancel the current navigation and schedule a new one to redirect the user.
        return this.checkLogin(url);
    }

    /**
     * Can protect child routes with the CanActivateChild guard. similar to CanActivate guard but it's run before any child route is activated.
     * Both are important because there maybe a requirements where a user can get to the root component, but may not meet conditions for child components.
     * In this app, this is not doing anything special.
     */
    a = 0;
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {
      console.log("Can canActivateChild hit");
      //Can do child specific checks.
      //if(this.a<1) {this.a++; return this.router.parseUrl('/heroes');}

      return this.canActivate(route, state);
    }

    /**
     * To be used for AdminModule route lazy loading to improve app loading time. You don't want to load
     * AdminModule unless the user is an authorized use. Configuration is in AppRoutingModule
     * Note: canLoad is called only once.
     */

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
      /**
       * Angular doesn't seem to provide a way to get the full url from Route. So have to concatnate /toh/
       */
      const url = `/angular-router/${route.path}`;
      console.log("Can load hit "+url);
      return this.checkLogin(url);
    }


    checkLogin(url: string): true|UrlTree {

        if (this.authService.isLoggedIn) { return true; }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Create a dummy session id
        const sessionId = 123456789;
        // Set our navigation extras object that contains our global query params and fragment
        // This is done mainly for authentication tokens and session ids.
        const navigationExtras: NavigationExtras = {
          queryParams: { session_id: sessionId },
          fragment: 'anchor'
        };
        // Redirect to the login page. returns the created UrlTree
        return this.router.createUrlTree(['/angular-router/login'], navigationExtras);
    }

    //From https://stackoverflow.com/questions/50250361/how-to-elegantly-get-full-url-from-the-activatedroutesnapshot
    getResolvedUrl(route: ActivatedRouteSnapshot): string {
        return route.pathFromRoot
            .map(v => v.url.map(segment => segment.toString()).join('/'))
            .join('/');
    }

    getConfiguredUrl(route: ActivatedRouteSnapshot): string {
        return '/' + route.pathFromRoot
            .filter(v => v.routeConfig)
            .map(v => v.routeConfig!.path)
            .join('/')
            .replace('//','/');
    }
}
