import { Component } from '@angular/core';
import { ApigouvService, Commune } from '../../services/apigouv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  searchTerm: string = '';
  communes: Commune[] = [];
  selectedCity: Commune | null = null; // Initialisez selectedCity à null
  villes$: Observable<Commune[]> | null = null; // Initialisez villes$ à null

  constructor(private apigouvService: ApigouvService) { }

  public onSearch(event: KeyboardEvent): void {
    const searchTerm = (event.target as HTMLInputElement).value;

    this.villes$ = this.apigouvService.searchCommunes(searchTerm); // Utilisez villes$ pour stocker les résultats de la recherche
    this.selectedCity = null; // Réinitialisez selectedCity lorsque vous effectuez une nouvelle recherche
  }

  public onCityClick(ville: Commune): void {
    this.selectedCity = ville; // Mettez à jour selectedCity lorsque l'utilisateur clique sur une ville
  }
}
