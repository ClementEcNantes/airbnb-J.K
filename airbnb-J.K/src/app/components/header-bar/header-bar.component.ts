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

  searchTerm: string = ''; // Terme de recherche entré par l'utilisateur
  communes: Commune[] = []; // Liste des communes
  selectedCity: Commune | null = null; // Ville sélectionnée
  villes$: Observable<Commune[]> | null = null; // Observable des villes
  showSuggestions: boolean = false; // Indicateur pour afficher ou non les suggestions
  showCityList: boolean = false; // Indicateur pour afficher ou non la liste des villes

  // Injection des services ApigouvService et CitySearchService dans le constructeur
  constructor(private apigouvService: ApigouvService, private CitySearchService: CitySearchService) { }

  // Méthode appelée lors de la recherche
  public onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;

    // Si le terme de recherche contient au moins 3 caractères
    if (searchTerm.length >= 3) {
      this.showSuggestions = true; // Afficher les suggestions
      this.villes$ = this.apigouvService.searchCommunes(searchTerm); // Rechercher les communes
      this.showCityList = true; // Afficher la liste des villes
    } else {
      this.showSuggestions = false; // Masquer les suggestions
      this.showCityList = false; // Masquer la liste des villes
    }

    this.selectedCity = null; // Réinitialiser la ville sélectionnée
  }

  // Méthode appelée lors du clic sur une ville
  public onCityClick(ville: Commune): void {
    this.selectedCity = ville; // Définir la ville sélectionnée
    this.showSuggestions = false; // Masquer les suggestions
    this.CitySearchService.selectCity(ville); // Sélectionner la ville
    this.showCityList = false; // Masquer la liste des villes
  }

  // Méthode appelée lors de l'appui sur la touche Entrée
  onEnterPress(): void {
    this.CitySearchService.selectCity(null); // Sélectionner aucune ville
  }
}
