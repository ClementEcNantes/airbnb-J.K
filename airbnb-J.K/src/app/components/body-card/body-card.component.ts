import { Component, Input, OnInit } from '@angular/core';
import { Logement } from 'src/app/models/Logements';

@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.scss']
})
export class BodyCardComponent implements OnInit {

  @Input() accomodation: Logement;

  constructor(){}

  prix:number;
  zipCode:number;
  rating:number;
  favourite:boolean;
  name:string;
  id:number;
  

  imageWithPrefix: string;
  backgroundSize: string;

  ngOnInit(): void {
    // Concaténer le préfixe "data:image/jpeg;base64," avec le string d'encodage de l'image
    this.imageWithPrefix = "data:image/jpeg;base64," + this.accomodation.image;
    this.backgroundSize = 'cover'; // Définissez la valeur de backgroundSize ici
  }  

}
