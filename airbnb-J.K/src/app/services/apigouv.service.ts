import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface pour définir le type de données
export interface Commune {
  nom: string;
  codesPostaux: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ApigouvService {
  private apiUrl = 'https://geo.api.gouv.fr/communes';

  constructor(private http: HttpClient) { }

  // Recherche de communes en fonction du terme
  searchCommunes(startsWith: string): Observable<Commune[]> {
    // Utilisez le paramètre 'startsWith' pour filtrer les communes
    return this.http.get<Commune[]>(`${this.apiUrl}?nom=${startsWith}*`);
  }

}
