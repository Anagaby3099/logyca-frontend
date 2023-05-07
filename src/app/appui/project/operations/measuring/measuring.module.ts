import { NgModule } from '@angular/core';

import { MeasuringComponent } from './measuring.component';
import { SharedModule } from '@app/shared/shared.module';
import { OperationsModule } from '../operations.module';

@NgModule({
  imports: [SharedModule],
  declarations: [MeasuringComponent],
  exports: [MeasuringComponent],
})
export class MeasuringModule {}
