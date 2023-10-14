import { Injectable } from '@angular/core';
import { Logement } from 'src/app/models/Logements';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccomodationsService {
  private apiBaseUrl = 'http://localhost:3000/accommodations/';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir la liste des logements
  getAccomodations() {
    // Effectue une requête HTTP GET pour récupérer les logements depuis l'URL de base de l'API
    return this.http.get<Array<Logement>>(`${this.apiBaseUrl}`);
  }

  getLogement(id: string | undefined){
    return this.http.get<Logement>(`${this.apiBaseUrl}${id}`);
  }
}
