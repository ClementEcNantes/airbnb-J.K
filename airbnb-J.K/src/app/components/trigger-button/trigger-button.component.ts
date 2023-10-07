import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-trigger-button',
  templateUrl: './trigger-button.component.html',
  styleUrls: ['./trigger-button.component.scss']
})
export class TriggerButtonComponent {
  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}