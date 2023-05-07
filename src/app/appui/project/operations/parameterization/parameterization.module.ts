import { NgModule } from '@angular/core';
import { ParameterizationComponent } from './parameterization.component';
import { SharedModule } from '@app/shared/shared.module';
import { OperationsModule } from '../operations.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ParameterizationComponent],
  exports: [ParameterizationComponent],
})
export class ParameterizationModule {}
