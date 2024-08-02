import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LowerCasePipe, NgClass, NgOptimizedImage} from "@angular/common";
import {RemoveWhiteSpacePipe} from "../remove-white-space.pipe";
import { RoutingService } from '../service/routing.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    LowerCasePipe,
    RemoveWhiteSpacePipe,
    NgClass
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOptions: string[] = ["Aktuelles", "Aktive Wehr", "Jugend", "Verein"]
  mobileMenuOpen: boolean = false;

  constructor(private router: RoutingService) {}

  toggleMobileNavbar() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  mobileLinkClick() {
    this.mobileMenuOpen = false;
  }

  route(route: string) {
    let lowerCase = route.toLowerCase()
    let withoutBlank = lowerCase.replaceAll(" ", "")
    this.router.next(withoutBlank)
  }
}

