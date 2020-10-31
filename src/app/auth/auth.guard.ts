import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

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
      //Can do child specific checks.
      //if(this.a<1) {this.a++; return this.router.parseUrl('/heroes');}

      return this.canActivate(route, state);
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
        return this.router.createUrlTree(['/login'], navigationExtras);
    }
}
