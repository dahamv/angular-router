import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { AdDirective } from './ad/ad.directive';
import { AdBannerComponent } from './ad/ad-banner.component';
import { AdService } from './ad/ad.service';


@NgModule({
  declarations: [DynamicComponent, AdDirective, AdBannerComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  providers: [AdService],
})
export class DynamicModule { }
