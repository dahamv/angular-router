import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  selectedCrisis$: Observable<Crisis>;
  //To highlight the selected item in the list
  selectedCrisisId : number;
  crises$: Observable<Crisis[]>;

  constructor(private route: ActivatedRoute,
                private crisisService: CrisisService, private messageService: MessageService) { }

  ngOnInit() {
    /**
     * To see difference between paramMap and snapshot.ParamMap methods.
     */
    this.crises$ = this.getCrises();
    this.selectedCrisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {

        //Handle both cases /heroes/15 and /heroes;hid=15;foo=foo
        let id = +params.get('id') || +params.get('hid');
        /**
         * wrap this arround setTimeOut() as a workaround to avoid Error ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
         * Previous value for 'selected': 'false'. Current value: 'true'.
         * This is an Angular componenet lifecycle related error.
         * see https://stackoverflow.com/questions/9083594/call-settimeout-without-delay
         */
        setTimeout(() => this.selectedCrisisId = id);
        return this.crisisService.getCrisis(id);
      })
    );
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
