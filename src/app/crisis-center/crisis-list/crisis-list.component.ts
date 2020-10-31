import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, filter, map, mergeMap, tap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  //To highlight the selected item in the list
  selectedCrisisId : number;
  crises$: Observable<Crisis[]>;

  constructor(private route: ActivatedRoute, private router: Router,
                private crisisService: CrisisService, private messageService: MessageService) { }

  ngOnInit() {
    /**
    * Handle /crisis-center;cid=1;foo=foo . Works even after component initialization beause of setTimeOut();
    * Cant get /crisis-center/4 as id here since in router config "path: ':id'" is matched to CrisisDetailComponenet, Not this componenet
    */
    this.crises$ =  this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        //Without setTimeOut only works on componenet initialization.
        setTimeout(() => this.selectedCrisisId = this.selectedCrisisId || +params.get('cid'));
        //Have to return an Observable so return clises anyway. Also the returned observable must be subscribed for this callback function to be called.
        return this.getCrises();
      })
    );

    /** Works for /crisis-center/4 but only on componenet initialization. */
    this.route.firstChild.paramMap.pipe(
      switchMap((params: ParamMap) => {
        //Since "path: ':id'" is defined for the firstChild CrisisDetailComponenet of CrisisListComponenet
        let id = +params.get('id');
        //Must return an Observable
        return of(id);
      })
    ).subscribe(id => {
        this.selectedCrisisId = id;
    });

    /**
    * Followed https://stackoverflow.com/questions/48977775/activatedroute-subscribe-to-first-child-parameters-observer
    * Works for [routerLink]=/crisis-center/4 . Since componenet is already initialized above method doesn't work.
    */
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap((route) => route.paramMap) //,
      //tap( paramMap => console.log('ParamMap', paramMap))
    ).subscribe(
      // Get the params (paramAsMap.params) and use them to highlight or everything that meet your need
      (paramAsMap) =>  {
        this.selectedCrisisId = +paramAsMap.get('id');
      }
    )
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisisId = crisis.id;
    this.messageService.add(`CrisisLIstComponent: Selected crisis id=${crisis.id}`);
  }

  getCrises(): Observable<Crisis[]> {
    return this.crisisService.getCrises();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
