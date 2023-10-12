import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../app/components/details/details.component';
import { BodyCatalogComponent } from './components/body-catalog/body-catalog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BodyCatalogComponent },
  { path: 'details/:id', component: DetailsComponent }, // Remplacez 'DetailsComponent' par le nom de votre composant de détails
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
