import { Component } from '@angular/core';
import { BreadcrumbsService } from '../service/breadcrumbs.service';

@Component({
  selector: 'app-jugend',
  standalone: true,
  imports: [],
  templateUrl: './jugend.component.html',
  styleUrl: './jugend.component.css'
})
export class JugendComponent {

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.breadcrumbsService.setNewRoute([{displayName: "Jugend", routerlink:"jugend"}])
  }
}
