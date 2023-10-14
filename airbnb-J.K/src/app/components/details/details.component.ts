import { Component, Input } from '@angular/core';
import { Logement } from 'src/app/models/Logements';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AccomodationsService } from 'src/app/services/accomodations.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accomodationService: AccomodationsService) {}

  accommodation$: Observable<Logement>;
  imageWithPrefix: string;
  backgroundSize: string;

  ngOnInit(): void {
      this.backgroundSize = 'cover';
      // URL complète
      const fullUrl = window.location.href;
      console.log('Full URL:', fullUrl);

      // URL partielle
      const partialUrl = this.router.url;
      const idStr = partialUrl.split('/').pop(); // '2'
      console.log('Partial URL:', idStr);
      this.accommodation$ = this.accomodationService.getLogement(idStr);
      this.accommodation$.subscribe(accommodation => {
        this.imageWithPrefix = "data:image/jpeg;base64," + accommodation.image;
    });
      

      // Segments d'URL
      const urlSegments = this.activatedRoute.snapshot.url.map(segment => segment.path);
      console.log('URL Segments:', urlSegments);
  }
}
