import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Logement } from 'src/app/models/Logements';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body-catalog',
  templateUrl: './body-catalog.component.html',
  styleUrls: ['./body-catalog.component.scss']
})
export class BodyCatalogComponent implements OnInit {
  constructor(private http: HttpClient) {}

  cards$: Observable<Array<Logement>>;
  
  ngOnInit(): void {
    this.cards$ = this.http.get<Array<Logement>>('http://localhost:3000/accommodations/');
  }

  
}
