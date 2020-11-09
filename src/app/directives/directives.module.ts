import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { HighlightDirective } from './highlight.directive';
import { WordLengthDetectorDirective } from './word-length-detector.directive';
import { SharkDirective } from './shark.directive';
import { ChildComponent } from './child/child.component';
import { PaneDirective } from './pane.directive';



@NgModule({
  declarations: [DirectivesComponent, HighlightDirective, WordLengthDetectorDirective, SharkDirective, ChildComponent, PaneDirective],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
