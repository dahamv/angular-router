import { Component, OnInit } from '@angular/core';
import { Joke } from './joke/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {

  //Content Projection
  joke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
  myJoke: Joke = new Joke("This is my Joke", "Ha Ha Ha");

}
