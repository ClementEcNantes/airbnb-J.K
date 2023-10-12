import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Logement } from 'src/app/models/Logements';
import { AccomodationsService } from 'src/app/services/accomodations.service';
import { CitySearchService } from 'src/app/services/city-search.service';
import { Commune } from '../../services/apigouv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body-catalog',
  templateUrl: './body-catalog.component.html',
  styleUrls: ['./body-catalog.component.scss']
})
export class BodyCatalogComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;

  constructor(private accomodationService: AccomodationsService, private CitySearchService: CitySearchService) {}

  // Observable pour stocker les "cards" (logements)
  cards$: Observable<Array<Logement>>;
  
  // Ville sélectionnée
  selectedCity: Commune | null = null;

  // Fonction exécutée lors de l'initialisation du composant
  ngOnInit(): void {
    // Récupère les logements depuis le service d'accommodations
    this.cards$ = this.accomodationService.getAccomodations();

    // Abonnez-vous au service de recherche de ville pour surveiller la sélection de la ville
    this.subscription = this.CitySearchService.citySelection$.subscribe((city: Commune | null) => {
      this.selectedCity = city;
      // Ajoutez ici le code pour effectuer des actions avec la ville sélectionnée.
    });
  }
  
  // Fonction exécutée lors de la destruction du composant
  ngOnDestroy() {
    // Assurez-vous de vous désabonner pour éviter les fuites de mémoire.
    this.subscription?.unsubscribe();
  }
}
