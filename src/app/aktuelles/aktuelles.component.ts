import { Component, OnInit } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import { RouterLink } from '@angular/router';
import { BreadcrumbsService } from '../service/breadcrumbs.service';

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
export class AktuellesComponent implements OnInit{

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
       this.breadcrumbsService.setNewRoute([{displayName: "Aktuelles", routerlink:"aktuelles"}])
  }
}
