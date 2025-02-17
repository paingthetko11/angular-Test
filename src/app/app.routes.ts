import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StreetComponent } from './street/street.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'street', component: StreetComponent }
];
