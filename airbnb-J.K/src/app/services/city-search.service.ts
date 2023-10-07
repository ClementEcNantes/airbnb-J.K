import { Injectable } from '@angular/core';
import { Commune } from '../../app/services/apigouv.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {
  private citySelection = new Subject<Commune | null>();
  citySelection$ = this.citySelection.asObservable();

  selectCity(city: Commune | null) {
    this.citySelection.next(city);
  }
}
