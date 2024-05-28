import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LowerCasePipe, NgClass, NgOptimizedImage} from "@angular/common";
import {RemoveWhiteSpacePipe} from "../remove-white-space.pipe";

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
  menuOptions: string[] = ["Home", "Aktuelles", "Aktive Wehr", "Jugend"]
  mobileMenuOpen: boolean = false;

  showBanner: boolean = true;

  bannerMessage: string = "🔥150 Jahre Feuerwehr Villenbach - Festwochenende 5.7.2025 und 6.7.2025🔥"

  toggleMobileNavbar() {
    let message = this.mobileMenuOpen ? "menu is now closed" : "menu is now open"
    console.log(message)
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  mobileLinkClick() {
    this.mobileMenuOpen = false;
  }
}

