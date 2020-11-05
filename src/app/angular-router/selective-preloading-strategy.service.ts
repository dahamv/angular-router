import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {

  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log("preload called");

    if (route.data && route.data.myAppPreload) {
      // add the route path to the preloaded module array to be fetched from the AdminDashboardComponenet
      this.preloadedModules.push(route.path);

      // log the route path to the console
      console.log('Preloaded: ' + route.path);

      return load();
    } else {
      return of(null);
    }
  }
}
