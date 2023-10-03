import { Component, ElementRef, ViewChild } from '@angular/core';

// Interface pour les éléments de la liste de défilement
interface ScrollItem {
  src: string;   // Lien de l'image
  width: number; // Largeur de l'image
  height: number; // Hauteur de l'image
}

@Component({
  selector: 'app-underheader',
  templateUrl: './underheader.component.html',
  styleUrls: ['./underheader.component.scss']
})
export class UnderheaderComponent {
  @ViewChild('container') container: ElementRef;
  @ViewChild('content') content: ElementRef;

  // Tableau d'éléments de la liste de défilement
  scrollItems: ScrollItem[] = [
    { src: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg', width: 24, height: 24 },
    { src: 'https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg', width: 24, height: 24 },
  ];
  scrollPosition = 0;
  itemsPerScroll = 10; // Faites défiler de 10 éléments à la fois
  animationFrameId = -1;

  constructor() {}

  scrollLeft() {
    const itemWidth = this.calculateItemWidth();
    const targetPosition = this.scrollPosition - itemWidth * this.itemsPerScroll;
    this.scrollToPosition(targetPosition);
  }

  scrollRight() {
    const itemWidth = this.calculateItemWidth();
    const maxScroll = (this.scrollItems.length - Math.ceil(this.scrollItems.length / this.itemsPerScroll)) * itemWidth;
    const targetPosition = this.scrollPosition + itemWidth * this.itemsPerScroll;
    this.scrollToPosition(Math.min(targetPosition, maxScroll));
  }

  scrollToPosition(targetPosition: number) {
    const step = 10; // Ajustez cette valeur pour modifier la vitesse du défilement
    if (this.animationFrameId !== -1) {
      cancelAnimationFrame(this.animationFrameId);
    }
  
    const animateScroll = () => {
      if (this.scrollPosition < targetPosition) {
        this.scrollPosition = Math.min(this.scrollPosition + step, targetPosition);
      } else if (this.scrollPosition > targetPosition) {
        this.scrollPosition = Math.max(this.scrollPosition - step, targetPosition);
      } else {
        cancelAnimationFrame(this.animationFrameId);
        return;
      }
  
      this.container.nativeElement.scrollLeft = this.scrollPosition;
      this.animationFrameId = requestAnimationFrame(animateScroll);
    };
  
    this.animationFrameId = requestAnimationFrame(animateScroll);
  }

  calculateItemWidth(): number {
    const containerWidth = this.container.nativeElement.clientWidth;
    return containerWidth / this.itemsPerScroll;
  }
}