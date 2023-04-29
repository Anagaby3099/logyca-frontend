import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { OperationsComponent } from './operations.component';
import { MeasuringComponent } from './measuring/measuring.component';
import { ParameterizationComponent } from './parameterization/parameterization.component';
import { MaterialModule } from 'src/app/material/material.module';
import { VectorizationComponent } from './vectorization/vectorizacion.component';
import { NgBootstrapModule } from 'src/app/ng-bootstrap/ng-bootstrap.module';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, NgBootstrapModule],
  declarations: [
    OperationsComponent,
    MeasuringComponent,
    ParameterizationComponent,
    VectorizationComponent
  ],
  exports: [OperationsComponent],
})
export class OperationsModule {}
