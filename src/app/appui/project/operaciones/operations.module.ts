import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { OperationsComponent } from './operations.component';
import { MeasuringComponent } from './measuring/measuring.component';
import { ParameterizationComponent } from './parameterization/parameterization.component';
import { MaterialModule } from 'src/app/material/material.module';
import { VectorizationComponent } from './vectorization/vectorizacion.component';
import { NgBootstrapModule } from 'src/app/ng-bootstrap/ng-bootstrap.module';
import { ProductComponent } from './product/product.component';
import { RequestComponent } from './request/request.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgBootstrapModule,
    TableModule,
    TagModule,
    ProgressBarModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [
    OperationsComponent,
    MeasuringComponent,
    ParameterizationComponent,
    VectorizationComponent,
    ProductComponent,
    RequestComponent,
  ],
  exports: [OperationsComponent],
})
export class OperationsModule {}
