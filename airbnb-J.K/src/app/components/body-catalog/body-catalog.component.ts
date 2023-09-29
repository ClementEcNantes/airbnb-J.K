import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Logement } from 'src/app/models/Logements';
import { AccomodationsService } from 'src/app/services/accomodations.service';

@Component({
  selector: 'app-body-catalog',
  templateUrl: './body-catalog.component.html',
  styleUrls: ['./body-catalog.component.scss']
})
export class BodyCatalogComponent implements OnInit {
  constructor(private accomodationService: AccomodationsService) {}

  cards$: Observable<Array<Logement>>;
  
  ngOnInit(): void {
    this.cards$ = this.accomodationService.getAccomodations();
  }  
}
