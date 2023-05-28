import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MobileDetectService {
  /**
   * mobileQuery type MediaQueryList
   */
  mobileQuery!: MediaQueryList;

  /**
   * save and emit last value
   */
  private isMobileSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  /**
   * observable (public interface), represent MediaQueryList
   */
  public isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();

  constructor(private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobileSubject.next(this.mobileQuery.matches);

    // Observar cambios en el media query
    this.mobileQuery.addEventListener('change', (event) => {
      this.isMobileSubject.next(event.matches);
    });
  }
}
