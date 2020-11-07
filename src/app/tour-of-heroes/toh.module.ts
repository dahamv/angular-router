import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { TourOfHeroesRoutingModule } from './toh-routing.module';
import { TourOfHeroesComponent } from './toh.component';


@NgModule({
  declarations: [
    TourOfHeroesComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    //CrisisCenterModule is removed since its preloaded.
    //CrisisCenterModule,
    //AdminModule is removed since its lazy loaded.
    //AdminModule,
    //AuthModule is removed since its lazy loaded.
    //AuthModule,
    //NOTE: TourOfHeroesRoutingModule import MUST come after the HeroesModule, CrisesModule etc. Since they have child routes.
    TourOfHeroesRoutingModule
  ]
})
export class TourOfHeroesModule {
    constructor(router: Router) {
      console.log('TourOfHeroesModule Loaded');
      //As mentioned in the AppModule, we can see the entire route configuration for this module.
      const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
      console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
 }
