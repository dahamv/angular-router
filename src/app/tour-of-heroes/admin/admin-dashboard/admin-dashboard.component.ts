import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {

  sessionId: Observable<string>;
  fragment: Observable<string>;
  preloadedModules: string[];

  constructor(private route: ActivatedRoute, preloadStrategy: SelectivePreloadingStrategyService) {
    this.preloadedModules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None'));

    // Capture the fragment if available
    this.fragment = this.route
      .fragment
      .pipe(map(fragment => fragment || 'None'));
  }

}
