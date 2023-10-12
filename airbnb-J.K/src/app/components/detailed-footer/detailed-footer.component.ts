import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detailed-footer',
  templateUrl: './detailed-footer.component.html',
  styleUrls: ['./detailed-footer.component.scss']
})
export class DetailedFooterComponent {
  // Événement de sortie pour fermer le pied de page détaillé
  @Output() close = new EventEmitter<void>();

  // Méthode appelée lorsque l'utilisateur clique sur le bouton de fermeture
  onClickClose(): void {
    // Émet un événement de fermeture vers le composant parent
    this.close.emit();
  }
}
