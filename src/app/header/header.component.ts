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
  menuOptions: string[] = ["Aktuelles", "Aktive Wehr", "Jugend", "Verein"]
  mobileMenuOpen: boolean = false;

  toggleMobileNavbar() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  mobileLinkClick() {
    this.mobileMenuOpen = false;
  }
}

