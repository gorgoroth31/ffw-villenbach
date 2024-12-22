import { Injectable } from '@angular/core';
import { Breadcrumb } from '../breadcrumb';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  private breadcrumbSubject: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject([{displayName: "Startseite", routerlink: ""}])
  routingSubject$: Observable<Breadcrumb[]> = this.breadcrumbSubject.asObservable();

  private baseBreadcrumb : Breadcrumb = {displayName: "Startseite", routerlink: ""}

  constructor() { }

  setNewRoute(breadcrumbs: Breadcrumb[]) {
    
    let newArray : Breadcrumb[] = [this.baseBreadcrumb]

    breadcrumbs.forEach(b => {
      newArray.push(b)
    })

    this.breadcrumbSubject.next(newArray)
  }
} 
