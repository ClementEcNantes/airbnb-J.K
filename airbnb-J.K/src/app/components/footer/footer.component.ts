import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // Variable pour contrôler la visibilité du pied de page détaillé
  isDetailedFooterVisible = false;

  // Méthode pour basculer la visibilité du pied de page détaillé
  toggleDetailedFooter(): void {
    this.isDetailedFooterVisible = !this.isDetailedFooterVisible;
  }
}
