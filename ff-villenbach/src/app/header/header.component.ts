import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LowerCasePipe, NgOptimizedImage} from "@angular/common";
import {RemoveWhiteSpacePipe} from "../remove-white-space.pipe";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    LowerCasePipe,
    RemoveWhiteSpacePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOptions: string[] = ["Home", "Aktuelles", "Aktive Wehr", "Jugend"]
}
