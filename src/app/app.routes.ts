import { Routes } from '@angular/router';
import {JugendComponent} from "./jugend/jugend.component";
import {AktuellesComponent} from "./aktuelles/aktuelles.component";
import {AktiveWehrComponent} from "./aktive-wehr/aktive-wehr.component";
import { VereinComponent } from './verein/verein.component';
import { ImpressumComponent } from './impressum/impressum.component';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [{
    path: "",
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
  {
    path: "verein",
    component: VereinComponent
  },
  {
    path: "impressum",
    component: ImpressumComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];
