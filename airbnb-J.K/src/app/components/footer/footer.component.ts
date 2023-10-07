import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isDetailedFooterVisible = false;

  toggleDetailedFooter(): void {
    this.isDetailedFooterVisible = !this.isDetailedFooterVisible;
  }
}