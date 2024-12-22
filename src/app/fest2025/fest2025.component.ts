import { Component } from '@angular/core';
import { BreadcrumbsService } from '../service/breadcrumbs.service';

@Component({
  selector: 'app-fest2025',
  standalone: true,
  imports: [],
  templateUrl: './fest2025.component.html',
  styleUrl: './fest2025.component.css'
})
export class Fest2025Component {
    tba = "Wird noch bekannt gegeben"

    constructor(private breadcrumbsService: BreadcrumbsService) {}
  
    ngOnInit(): void {
      this.breadcrumbsService.setNewRoute([{displayName: "Fest 2025", routerlink:"fest-2025"}])
    }
}
