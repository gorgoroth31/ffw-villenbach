import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import { Subscription } from 'rxjs';
import { RoutingService } from './service/routing.service';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbsService } from './service/breadcrumbs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ff-villenbach';
  
  breadcrumbs : Breadcrumb[] = []

  breadcrumbsRerender = ""

  readonly subscriptions: Subscription = new Subscription()

  constructor(private router: RoutingService, private breadcrumbService: BreadcrumbsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
      this.subscriptions.add(
        this.router.routingSubject$.subscribe(value => {
          console.log(value)
        })
      )

      this.subscriptions.add(
        this.breadcrumbService.routingSubject$.subscribe(value => {
          this.breadcrumbs = value
          this.cdr.detectChanges()
        })
      )
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe()
  }
}
