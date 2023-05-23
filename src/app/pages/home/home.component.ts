import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AuthenticationService } from '@app/auth/service/auth.service';
import { IRuta, ROUTES_CONFIG } from '@app/constantes/routes.const';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  mobileQuery!: MediaQueryList;
  showSideBar: boolean = true;
  rutas: IRuta[] = ROUTES_CONFIG;
  rutaImg: string = '/assets/descargar.jpg';

  private _mobileQueryListener: () => void;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private athService: AuthenticationService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery?.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery?.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.athService.logout();
  }

  toogleSideBar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
