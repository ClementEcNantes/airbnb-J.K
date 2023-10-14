import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { BodyCatalogComponent } from './components/body-catalog/body-catalog.component';
import { BodyCardComponent } from './components/body-card/body-card.component';

import {HttpClientModule} from '@angular/common/http';
import { UnderheaderComponent } from './components/underheader/underheader.component';
import { FooterMapButtonComponent } from './components/footer-map-button/footer-map-button.component';
import { DetailedFooterComponent } from './components/detailed-footer/detailed-footer.component';
import { TriggerButtonComponent } from './components/trigger-button/trigger-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    BodyCatalogComponent,
    BodyCardComponent,
    UnderheaderComponent,
    FooterMapButtonComponent,
    DetailedFooterComponent,
    TriggerButtonComponent,
    FooterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
