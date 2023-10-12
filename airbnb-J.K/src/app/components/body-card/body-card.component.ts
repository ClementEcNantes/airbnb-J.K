import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Concaténer le préfixe "data:image/jpeg;base64," avec le string d'encodage de l'image
    this.imageWithPrefix = "data:image/jpeg;base64," + this.accomodation.image;
    this.backgroundSize = 'cover';
    this.formattedRating = this.accomodation.rating.toLocaleString('fr-FR', { maximumFractionDigits: 1 });

    const likedState = localStorage.getItem(`like_${this.accomodation.id}`);
    if (likedState) {
      this.isLiked = likedState === 'true';
    }
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
    localStorage.setItem(`like_${this.accomodation.id}`, this.isLiked.toString());
  }

  onCardClick(): void {
    console.log('onCardClick');
    this.router.navigate(['/details', this.accomodation.id], {
      state: { accomodation: this.accomodation } // Passez le logement en tant que données
    });
  }
  
}
