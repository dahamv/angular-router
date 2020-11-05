import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animations';

@Component({
  selector: 'app-angular-router',
  templateUrl: './angular-router.component.html',
  animations: [ slideInAnimation ]
})
export class AnglularRouterComponent {
  getAnimationData(outlett: RouterOutlet) {
    return outlett && outlett.activatedRouteData && outlett.activatedRouteData.animation;
  }
}
