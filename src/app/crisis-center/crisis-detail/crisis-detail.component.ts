import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  editName: string;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private service: CrisisService,
                public dialogService: DialogService) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id = +params.get('id');
        return this.service.getCrisis(id);
      })
    ).subscribe(crisis => { this.crisis = crisis;
                            this.editName = crisis.name;});
  }

  /**
   * This method is called when CanDeactivateGuardReusable is used in CrisesCenterRoutingModule
   */
  canDeactivate(): Observable<boolean> | boolean {
    console.log("CrisisDetailComponenet canDeactivate() hit");
    // Allow synchronous (i.e. not an Observable) navigation (`true` - boolean) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    /**
       * same as in hero-detail componenet.
      */
    //this.router.navigate(['/crises', { hid: crisisId, foo: 'foo' }]);   //What was before crisis-center feature.

    // NOTE: Relative navigation back to the crises
    this.router.navigate(['../', { cid: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }
}
