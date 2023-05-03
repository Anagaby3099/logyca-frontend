import { Component } from '@angular/core';
import { IRuta, ROUTES_CONFIG } from './constantes/routes.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSideBar: boolean = true;
  rutas: IRuta[] = ROUTES_CONFIG;
  rutaImg: string = '/assets/descargar.jpg';

  toogleSideBar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
