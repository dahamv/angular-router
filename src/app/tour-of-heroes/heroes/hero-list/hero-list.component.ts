import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero$: Observable<Hero>;
  //To highlight the selected item in the list
  selectedHeroId : number;
  showChildComponent : boolean;
  heroes$: Observable<Hero[]>;

  constructor(private route: ActivatedRoute,
                private heroService: HeroService) { }

  ngOnInit() {
    console.log("HeroListComponenet: onInit() called");
    /**
     * To see difference between paramMap and snapshot.ParamMap methods.
     */
    this.heroes$ = this.getHeroes();
    this.selectedHero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        //Handle both cases /heroes/15 and /heroes;hid=15;foo=foo
        let id = +params.get('id') || +params.get('hid');
        /**
         * wrap this arround setTimeOut() as a workaround to avoid Error ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
         * Previous value for 'selected': 'false'. Current value: 'true'.
         * This is an Angular componenet lifecycle related error.
         * see https://stackoverflow.com/questions/9083594/call-settimeout-without-delay
         */
        setTimeout(() => { this.selectedHeroId = id;
                           if(id)
                              this.showChildComponent = true;});

        return this.heroService.getHero(id);
      })
    );
  }

  onSelect(hero: Hero): void {
    console.log(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHeroId = hero.id;
  }

  getHeroes(): Observable<Hero[]> {
    return this.heroService.getHeroes();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
