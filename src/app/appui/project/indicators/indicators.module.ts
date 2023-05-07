import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { IndicatorsComponent } from './indicators.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [IndicatorsComponent],
  exports: [],
})
export class IndicatorsModule {}
