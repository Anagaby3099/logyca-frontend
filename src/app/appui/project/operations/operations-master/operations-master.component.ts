import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-operations-master',
  templateUrl: './operations-master.component.html',
  styleUrls: ['./operations-master.component.scss'],
})
export class OperationsMasterComponent implements OnInit {
  @Input() rutaSeleccionada: string = new Input();

  isCollapsed: boolean = false;
  selected_index: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (route) => (this.selected_index = this.tabChangeSelection(route))
    );
  }

  tabChangeSelection(params: Params) {
    switch (params['route']) {
      case 'parametrizacion':
        return 0;

      case 'vectorizacion':
        return 1;

      case 'cronograma':
        return 2;

      case 'medicion':
        return 3;

      case 'solicitudes':
        return 4;

      case 'productos':
        return 5;

      default:
        return 0;
    }
  }
  // Método para actualizar el parámetro de la ruta al seleccionar un tab
  updateRouteParam(selectedIndex: number) {
    let routeParam: string;
    switch (selectedIndex) {
      case 0:
        routeParam = 'parametrizacion';
        break;
      case 1:
        routeParam = 'vectorizacion';
        break;
      case 2:
        routeParam = 'cronograma';
        break;
      case 3:
        routeParam = 'medicion';
        break;
      case 4:
        routeParam = 'solicitudes';
        break;
      case 5:
        routeParam = 'productos';
        break;
      default:
        routeParam = '';
        break;
    }

    // Actualizar el parámetro de la ruta
    this.router.navigate(['./operaciones', routeParam]);
  }
}
