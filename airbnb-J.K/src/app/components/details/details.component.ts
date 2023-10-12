import { Component, Input } from '@angular/core';
import { Logement } from 'src/app/models/Logements';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() accomodation: Logement;
}
