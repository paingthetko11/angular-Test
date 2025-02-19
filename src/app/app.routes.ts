import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StreetComponent } from './street/street.component';
import { ButtomComponent } from './buttom/buttom.component';
import { SelectComponent } from './select/select.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'street', component: StreetComponent },
    {path:'buttom', component:ButtomComponent},
    {path:"select",component:SelectComponent}
];
