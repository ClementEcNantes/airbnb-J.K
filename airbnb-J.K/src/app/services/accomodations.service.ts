import { Injectable } from '@angular/core';
import { Logement } from 'src/app/models/Logements';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccomodationsService {
  private apiBaseUrl = 'http://localhost:3000/accommodations/';

  constructor(private http: HttpClient) {}

  getAccomodations(){
    return this.http.get<Array<Logement>>(`${this.apiBaseUrl}`);
  }
}
