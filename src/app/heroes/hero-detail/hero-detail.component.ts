import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {


  @Input() hero : Hero;
  navigatedByUrl : boolean;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private service: HeroService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getHero(id).subscribe(hero => this.hero = hero);
    //check if this componenet is created by router-outlet or the parent component.
    this.navigatedByUrl = this.router.url.includes("/hero/");

  }

  gotoHeroes() {
    this.router.navigate(['/heroes']);
  }
}
