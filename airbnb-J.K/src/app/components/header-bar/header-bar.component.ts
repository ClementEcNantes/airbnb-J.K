import { Component } from '@angular/core';
import { ApigouvService, Commune } from '../../services/apigouv.service';
import { Observable } from 'rxjs';
import { CitySearchService } from 'src/app/services/city-search.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {

  searchTerm: string = '';
  communes: Commune[] = [];
  selectedCity: Commune | null = null;
  villes$: Observable<Commune[]> | null = null;
  showSuggestions: boolean = false;
  showCityList: boolean = false; // Nouvelle propriété pour afficher la liste de villes

  constructor(private apigouvService: ApigouvService, private CitySearchService: CitySearchService) { }

  public onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;

    if (searchTerm.length >= 3) {
      this.showSuggestions = true;
      this.villes$ = this.apigouvService.searchCommunes(searchTerm);
      this.showCityList = true; // Afficher la liste de villes lorsque la recherche est active
    } else {
      this.showSuggestions = false;
      this.showCityList = false; // Masquer la liste de villes lorsque la recherche est vide
    }

    this.selectedCity = null;
  }

  public onCityClick(ville: Commune): void {
    this.selectedCity = ville;
    this.showSuggestions = false;
    this.CitySearchService.selectCity(ville);
    this.showCityList = false; // Masquer la liste de villes lorsque vous cliquez sur une ville
  }

  onEnterPress(): void {
    this.CitySearchService.selectCity(null);
  }
}
