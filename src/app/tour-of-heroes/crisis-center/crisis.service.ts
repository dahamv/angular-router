import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor() { }

  getCrises(): Observable<Crisis[]> {
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id)),
      delay(1000)
    );
  }
}
