import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // preserve the global query params and fragment. In this case ?session_id=123456789#anchor added by AuthGuard
        // So that AdminDashboardComponenet can read and store them.
        const navigationExtras: NavigationExtras = {
        /**
          * Check?? The queryParamsHandling feature also provides a merge option, which preserves and combines the
          * current query parameters with any provided query parameters when navigating.
          * The query params and fragment can also be preserved using a RouterLink with the queryParamsHandling and preserveFragment bindings respectively.
          */
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user to the redirectUrl ('/admin') with navigationExtras ('?session_id=123456789#anchor')
        if(this.authService.redirectUrl)
          this.router.navigate([this.authService.redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
