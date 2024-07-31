import { Routes } from '@angular/router';
import {JugendComponent} from "./jugend/jugend.component";
import {AktuellesComponent} from "./aktuelles/aktuelles.component";
import {AktiveWehrComponent} from "./aktive-wehr/aktive-wehr.component";
import { VereinComponent } from './verein/verein.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "aktuelles",
    pathMatch: "full"
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
  {
    path: "verein",
    component: VereinComponent
  },
];
