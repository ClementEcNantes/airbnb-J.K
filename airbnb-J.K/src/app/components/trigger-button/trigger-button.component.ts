import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trigger-button',
  templateUrl: './trigger-button.component.html',
  styleUrls: ['./trigger-button.component.scss']
})
export class TriggerButtonComponent {
  @Output() click = new EventEmitter<void>();

  // Fonction déclenchée lorsqu'on clique sur le bouton
  onClick(): void {
    this.click.emit(); // Émet un événement pour informer le composant parent
  }
}
