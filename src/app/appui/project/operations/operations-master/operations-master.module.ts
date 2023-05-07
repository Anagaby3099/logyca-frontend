import { NgModule } from '@angular/core';
import { ComponentsModule } from '@app/appui/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { MeasuringModule } from '../measuring/measuring.module';
import { ParameterizationModule } from '../parameterization/parameterization.module';
import { ProductModule } from '../product/product.module';
import { RequestModule } from '../request/request.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { VectorizationModule } from '../vectorization/vectorization.module';
import { OperationsMasterComponent } from './operations-master.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    MeasuringModule,
    ParameterizationModule,
    ProductModule,
    RequestModule,
    ScheduleModule,
    VectorizationModule,
  ],
  declarations: [OperationsMasterComponent],
  exports: [],
})
export class OperationsMasterModule {}
