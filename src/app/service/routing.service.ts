import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private routingSubject: BehaviorSubject<string> = new BehaviorSubject("")
  routingSubject$: Observable<string> = this.routingSubject.asObservable();

  constructor() { }

  next(route: string) {
    this.routingSubject.next(route)
  }
}
