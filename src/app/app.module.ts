import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TourOfHeroesModule } from './tour-of-heroes/toh.module';



@NgModule({
  imports: [
    BrowserModule,
    TourOfHeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    //PageNotFoundComponent,
    //ComposeMessageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('AppModule Loaded');
    /**
     * Diagnostic only: inspect router configuration
     * To determine if your routes are actually evaluated in the proper order, you can inspect the router's configuration.
     * Do this by injecting the router and logging to the console its config property. For example, update the AppModule as follows
     * and look in the browser console window to see the finished route configuration.
     * Here we use a custom replacer to display function names in the route configs
     */
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
