import {Component} from '@angular/core';
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
  menuOptions: [string, string][] = [["Aktuelles", "aktuelles"], ["Fest 2025", "fest-2025"] ,["Aktive Wehr", "aktivewehr"], ["Jugend", "jugend"], ["Verein", "verein"]]

  // menuOptions: string[] = ["Aktuelles", "Aktive Wehr", "Jugend", "Verein"]
  image: string = "\"assets/img/hochwasser/helibild-cropped.png\""
  mobileMenuOpen: boolean = false;

  toggleMobileNavbar() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  mobileLinkClick() {
    this.mobileMenuOpen = false;
  }

  protected readonly location = location;
}

