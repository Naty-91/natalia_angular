import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { SupermarketsComponent } from './features/supermarkets/supermarkets.component';
import { BuscadorComponent } from './features/buscador/buscador.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  {path:'supermarkets', component:SupermarketsComponent},
  {path:'buscador', component:BuscadorComponent}
];
