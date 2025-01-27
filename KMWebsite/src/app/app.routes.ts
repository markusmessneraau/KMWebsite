import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiografieComponent } from './biografie/biografie.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KontaktFormularComponent } from './kontakt-formular/kontakt-formular.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Startseite
  { path: 'biografie', component: BiografieComponent }, // Biografie
  { path: 'kontakt', component: KontaktComponent }, //Kontakt
  { path: 'kontakt-formular', component: KontaktFormularComponent },//Kontaktaufnahem
];

