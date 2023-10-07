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
export class BodyCatalogComponent implements OnInit, OnDestroy  {

  private subscription: Subscription | null = null;

  constructor(private accomodationService: AccomodationsService, private CitySearchService: CitySearchService) {}

  cards$: Observable<Array<Logement>>;
  selectedCity: Commune | null = null;
  
  ngOnInit(): void {
    this.cards$ = this.accomodationService.getAccomodations();

    this.subscription = this.CitySearchService.citySelection$.subscribe((city: Commune | null) => {
      this.selectedCity = city;
      // Ajoutez ici le code pour faire quelque chose avec la ville sélectionnée.
    });
  }
  
  ngOnDestroy() {
    // Assurez-vous de vous désabonner pour éviter les fuites de mémoire.
    this.subscription?.unsubscribe();
  }
}
