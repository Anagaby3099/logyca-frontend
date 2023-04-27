import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent {
  @Input() rutaSeleccionada: string = new Input();

  isCollapsed: boolean = false;

  constructor(private router: Router) { }

  navegar(ruta: string): void {
    this.router.navigate([`operaciones/${ruta}`])
  }

  esSeleccionada(ruta: string): boolean {
    return this.rutaSeleccionada === ruta;
  }
}
