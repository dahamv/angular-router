import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    //CrisisCenterModule is removed since its preloaded.
    //CrisisCenterModule,
    //AdminModule is removed since its lazy loaded.
    //AdminModule,
    //AuthModule is removed since its lazy loaded.
    //AuthModule,
    //NOTE: AppRoutingModule import MUST come after the HeroesModule, CrisesModule etc. Since they have child routes.
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
    console.log('AppModule Loaded');
  }
}
