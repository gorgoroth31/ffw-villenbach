import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOptions: [string, string][] = [["Aktuelles", "aktuelles"], ["Fest 2025", "fest-2025"] ,["Aktive Wehr", "aktivewehr"], ["Jugend", "jugend"]]

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

