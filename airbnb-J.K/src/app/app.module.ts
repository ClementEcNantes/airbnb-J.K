import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { BodyCatalogComponent } from './components/body-catalog/body-catalog.component';
import { BodyCardComponent } from './components/body-card/body-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    BodyCatalogComponent,
    BodyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
