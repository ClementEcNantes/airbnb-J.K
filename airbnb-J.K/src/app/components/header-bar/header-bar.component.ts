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
  showCityList: boolean = false;
  menuVisible: boolean = false; // Variable pour contrôler la visibilité du menu déroulant

  constructor(private apigouvService: ApigouvService, private CitySearchService: CitySearchService) { }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;

    if (searchTerm.length >= 3) {
      this.showSuggestions = true;
      this.villes$ = this.apigouvService.searchCommunes(searchTerm);
      this.showCityList = true;
    } else {
      this.showSuggestions = false;
      this.showCityList = false;
    }

    this.selectedCity = null;
  }

  onCityClick(ville: Commune): void {
    this.selectedCity = ville;
    this.showSuggestions = false;
    this.CitySearchService.selectCity(ville);
    this.showCityList = false;
  }

  onEnterPress(): void {
    this.CitySearchService.selectCity(null);
  }

  // Méthode pour basculer la visibilité du menu déroulant
  toggleMenu() {
    console.log('toggleMenu');
    this.menuVisible = !this.menuVisible;
  }
}
