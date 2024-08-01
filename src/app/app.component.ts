import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import { JugendComponent } from "./jugend/jugend.component";
import { VereinComponent } from "./verein/verein.component";
import { AktiveWehrComponent } from "./aktive-wehr/aktive-wehr.component";
import { AktuellesComponent } from "./aktuelles/aktuelles.component";
import { Subscription } from 'rxjs';
import { RoutingService } from './service/routing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, JugendComponent, VereinComponent, AktiveWehrComponent, AktuellesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ff-villenbach';

  readonly subscriptions: Subscription = new Subscription()

  constructor(private router: RoutingService) {}

  ngOnInit(): void {
      this.subscriptions.add(
        this.router.routingSubject$.subscribe(value => {
          console.log(value)
        })
      )
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe()
  } 
}
