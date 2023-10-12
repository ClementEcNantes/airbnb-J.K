import { Injectable } from '@angular/core';
import { Commune } from '../../app/services/apigouv.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {
  // Crée un sujet (Subject) pour la sélection de la ville
  private citySelection = new Subject<Commune | null>();
  
  // Crée un observable basé sur le sujet pour permettre la souscription depuis d'autres composants
  citySelection$ = this.citySelection.asObservable();

  // Méthode pour sélectionner une ville
  selectCity(city: Commune | null) {
    // Émet la valeur de la ville sélectionnée à tous les observateurs
    this.citySelection.next(city);
  }
}
