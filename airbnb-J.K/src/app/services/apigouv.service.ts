import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface pour définir le type de données pour une commune
export interface Commune {
  nom: string; // Nom de la commune
  codesPostaux: string[]; // Liste des codes postaux de la commune
}

@Injectable({
  providedIn: 'root'
})
export class ApigouvService {
  private apiUrl = 'https://geo.api.gouv.fr/communes';

  constructor(private http: HttpClient) { }

  // Méthode pour rechercher des communes en fonction du terme de recherche
  searchCommunes(startsWith: string): Observable<Commune[]> {
    // Utilisez le paramètre 'startsWith' pour filtrer les communes en fonction du début du nom
    return this.http.get<Commune[]>(`${this.apiUrl}?nom=${startsWith}*`);
  }
}
