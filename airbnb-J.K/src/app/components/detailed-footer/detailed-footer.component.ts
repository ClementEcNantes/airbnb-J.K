import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-detailed-footer',
  templateUrl: './detailed-footer.component.html',
  styleUrls: ['./detailed-footer.component.scss']
})
export class DetailedFooterComponent {
  @Output() close = new EventEmitter<void>();

  onClickClose(): void {
    this.close.emit();
  }
}
