import { Component } from '@angular/core';
import { BreadcrumbsService } from '../service/breadcrumbs.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit(): void {
    this.breadcrumbsService.setNewRoute([])
  }
}
