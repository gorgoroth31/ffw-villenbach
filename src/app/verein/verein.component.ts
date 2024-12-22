import { Component } from '@angular/core';
import { BreadcrumbsService } from '../service/breadcrumbs.service';

@Component({
  selector: 'app-verein',
  standalone: true,
  imports: [],
  templateUrl: './verein.component.html',
  styleUrl: './verein.component.css'
})
export class VereinComponent {

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.breadcrumbsService.setNewRoute([{displayName: "Verein", routerlink:"verein"}])
  }
}
