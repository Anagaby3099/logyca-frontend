import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
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
