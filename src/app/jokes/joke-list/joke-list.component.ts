import { Component, OnInit, ViewChild, ContentChild, AfterViewInit, AfterContentInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Joke } from '../joke/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['../jokes.component.scss']
})
export class JokeListComponent implements AfterContentInit, AfterViewInit {

  /**
   * This is a reference to the <app-joke> child element in this template. Will get the first child only
   * @ViewChild decorator means, search inside this component’s template, its view, for this child component.
   */
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  /**
   * Will get all two children in a QueryList. It won't get the <ng-content> projected child.
   */
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  /** To get template reference. <h4 #header>View Jokes</h4> */
  @ViewChild("header") headerEl: ElementRef;
  /** To get the child <app-joke> projected into <ng-content>. Similler to ViewCild and ViewChildren (ContentChildren) */
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  jokes: Joke[] = [
      new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
    ];

  constructor() {
    /**
     *  This will print undefined since by the time the constructor is called the children are not yet rendered
     */
    console.log(`constructor - new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterViewInit() {
    //This will print the first child.
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    //This will print two children.
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);

    //<h4 #header>View Jokes</h4> is changed to the following
    /**
     * Note:
     *  It’s not recommended to interact with the DOM directly with an ElementRef since that results in code that’s not very portable.
     */
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }

}
