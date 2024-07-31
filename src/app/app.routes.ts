import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {JugendComponent} from "./jugend/jugend.component";
import {AktuellesComponent} from "./aktuelles/aktuelles.component";
import {AktiveWehrComponent} from "./aktive-wehr/aktive-wehr.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "aktuelles",
    component: AktuellesComponent
  },
  {
    path: "aktivewehr",
    component: AktiveWehrComponent
  },
  {
    path: "jugend",
    component: JugendComponent
  },
];
