import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { BodyCatalogComponent } from './components/body-catalog/body-catalog.component';
import { BodyCardComponent } from './components/body-card/body-card.component';

import {HttpClientModule} from '@angular/common/http';
import { UnderheaderComponent } from './components/underheader/underheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    BodyCatalogComponent,
    BodyCardComponent,
    UnderheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
