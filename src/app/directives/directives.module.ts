import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { AttributeDirectiveComponent } from './attribute/attribute-directive.component';
import { HighlightDirective } from './attribute/highlight.directive';
import { WordLengthDetectorDirective } from './attribute/word-length-detector.directive';
import { SharkDirective } from './attribute/shark.directive';
import { ChildComponent } from './attribute/child/child.component';
import { PaneDirective } from './attribute/pane.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModelComponent } from './ng-model/ng-model.component';
import { UnlessDirective } from './structural/unless.directive';
import { StructuralDirectiveComponent } from './structural/structural-directive.component';



@NgModule({
  declarations: [
      DirectivesComponent,
      AttributeDirectiveComponent,
      HighlightDirective,
      WordLengthDetectorDirective,
      SharkDirective,
      ChildComponent,
      PaneDirective,
      NgModelComponent,
      UnlessDirective,
      StructuralDirectiveComponent
    ],
  imports: [
    FormsModule,
    //ReactiveFormsModule,
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
