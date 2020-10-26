import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisDetailComponent implements OnInit {

  crisis$ : Observable<Crisis>;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private service: CrisisService) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this. crisis$ = this.service.getCrisis(id);
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    /**
       * same as in hero-detail componenet.
      */
    this.router.navigate(['/crises', { hid: crisisId, foo: 'foo' }]);
  }
}
