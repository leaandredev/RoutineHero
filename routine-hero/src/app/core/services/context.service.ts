import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppContext } from '../models/app-context.enum';

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  private currentContext = new BehaviorSubject<AppContext>(AppContext.Children);

  constructor() {}

  public setContext(context: AppContext) {
    this.currentContext.next(context);
  }

  public getContext(): Observable<AppContext> {
    return this.currentContext.asObservable();
  }

  public getCurrentValue(): string {
    return this.currentContext.value;
  }
}
