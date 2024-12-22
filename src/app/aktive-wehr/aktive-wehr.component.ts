import { Component } from '@angular/core';
import { BreadcrumbsService } from '../service/breadcrumbs.service';

@Component({
  selector: 'app-aktive-wehr',
  standalone: true,
  imports: [],
  templateUrl: './aktive-wehr.component.html',
  styleUrl: './aktive-wehr.component.css'
})
export class AktiveWehrComponent {

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.breadcrumbsService.setNewRoute([{displayName: "Aktive Wehr", routerlink:"aktivewehr"}])
  }
}
