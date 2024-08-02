import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-aktuelles',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './aktuelles.component.html',
  styleUrl: './aktuelles.component.css'
})
export class AktuellesComponent {

}
