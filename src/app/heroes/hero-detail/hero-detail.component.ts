import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  hero$ : Observable<Hero>
  heroId : number = null;
  heroName : string = null;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private service: HeroService) {}

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.service.getHero(+params.get('id')))
    );
    this.hero$.subscribe(hero => {this.heroId = hero.id; this.heroName = hero.name ; console.log( hero.id + hero.name) })
  }

  gotoHeroes() {
    this.router.navigate(['/heroes']);
  }
}
