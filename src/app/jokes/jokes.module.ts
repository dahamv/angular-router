import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesComponent } from './jokes.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';


@NgModule({
  declarations: [JokesComponent, JokeListComponent, JokeComponent],
  imports: [
    CommonModule,
    JokesRoutingModule
  ]
})
export class JokesModule { }
