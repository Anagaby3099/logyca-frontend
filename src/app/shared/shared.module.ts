import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [OperacionesComponent],
  exports: [OperacionesComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
