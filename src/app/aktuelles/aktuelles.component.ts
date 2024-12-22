import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aktuelles',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './aktuelles.component.html',
  styleUrl: './aktuelles.component.css'
})
export class AktuellesComponent {

}
