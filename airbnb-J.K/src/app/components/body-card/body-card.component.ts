import { Component, Input, OnInit } from '@angular/core';
import { Logement } from 'src/app/models/Logements';

@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.scss']
})
export class BodyCardComponent implements OnInit {

  @Input() accomodation: Logement;
  formattedRating: string;
  imageWithPrefix: string;
  backgroundSize: string;
  isLiked: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Concaténer le préfixe "data:image/jpeg;base64," avec le string d'encodage de l'image
    this.imageWithPrefix = "data:image/jpeg;base64," + this.accomodation.image;
    this.backgroundSize = 'cover'; // Définissez la valeur de backgroundSize ici
    this.formattedRating = this.accomodation.rating.toLocaleString('fr-FR', { maximumFractionDigits: 1 });

    // Vérifiez si l'état "like" est déjà stocké dans le stockage local
    const likedState = localStorage.getItem(`like_${this.accomodation.id}`);

    // Si l'état "like" est trouvé, mettez à jour isLiked en conséquence
    if (likedState) {
      this.isLiked = likedState === 'true';
    }
  }

  toggleLike(): void {
    // Inversez l'état "like"
    this.isLiked = !this.isLiked;

    // Stockez l'état "like" dans le stockage local
    localStorage.setItem(`like_${this.accomodation.id}`, this.isLiked.toString());
  }
}
