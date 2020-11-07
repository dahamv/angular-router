import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {

  //hero is set both by parents property biding and this.ngOnInit()
  @Input() hero$ : Observable<Hero>;
  navigatedByUrl : boolean;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private service: HeroService) {}

  ngOnInit(): void {
    //TODO: find a better way to check navigatedByUrl:boolean
    //To handle /hero/12 => /superhero/12
    //to prevent overiding hero$ check if this componenet is created by router-outlet(navigatedByUrl) or the parent component<app-hero-detail>.
    this.navigatedByUrl = this.router.url.includes("/superhero/");
    if(this.navigatedByUrl) {
      const id = this.route.snapshot.paramMap.get('id');
      this. hero$ = this.service.getHero(id);
    }
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    /**
       * The router navigate() method takes the same one-item link parameters array that you can bind to a [routerLink] directive.
       *
       * Pass along the hero id if available so that the HeroList component can select that hero and highlight the hero just viewed.
       * Include a junk 'foo' property for fun.
       *
       * The optional route parameters are not separated by "?" and "&" as they would be in the URL query string.
       * They are separated by semicolons ";". This is matrix URL notation.
       *
       * NOTE: Redirects: using /heroes here doesn't work. But /heroes with routerLink works.
      */
    this.router.navigate(['/angular-router/superheroes', { hid: heroId, foo: 'foo' }]);
  }
}
