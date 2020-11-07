import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './animations';

@Component({
  selector: 'app-toh',
  templateUrl: './toh.component.html',
  animations: [ slideInAnimation ]
})
export class TourOfHeroesComponent {
  getAnimationData(outlett: RouterOutlet) {
    return outlett && outlett.activatedRouteData && outlett.activatedRouteData.animation;
  }
}
