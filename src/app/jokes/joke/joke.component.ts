import { Component, OnInit, Input } from '@angular/core';
import { Joke } from './joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['../jokes.component.scss']
})
export class JokeComponent {

@Input("joke") data: Joke;

}
