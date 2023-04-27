import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesComponent } from './components/operaciones/operaciones.component';

@NgModule({
  declarations: [OperacionesComponent],
  exports: [OperacionesComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
