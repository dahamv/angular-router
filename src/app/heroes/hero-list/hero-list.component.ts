import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../../message.service';
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
  selectedHero : Hero;

  heroes: Hero[];

  constructor(private route: ActivatedRoute,
                private router: Router, private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();

    /**
     * To see difference between paramMap and snapshot.ParamMap methods.
     */
    this.selectedHero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id = +params.get('id');
        console.log('the id ' + id);
        let hero = this.heroService.getHero(id);
        return hero;
      })
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
