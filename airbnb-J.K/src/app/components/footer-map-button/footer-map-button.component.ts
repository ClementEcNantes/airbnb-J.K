import { Component, AfterViewInit  } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-footer-map-button',
  templateUrl: './footer-map-button.component.html',
  styleUrls: ['./footer-map-button.component.scss'],
})
export class FooterMapButtonComponent implements AfterViewInit{
  private map: any;
  isMapVisible = false;

  private initMap(): void {
    this.map = L.map('map', {
      center: [47.603354, 1.888334],
      zoom: 6,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 5,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }
}
