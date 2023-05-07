import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsMasterModule } from './operations-master/operations-master.module';

@NgModule({
  imports: [
    SharedModule,
    OperationsRoutingModule,
    ComponentsModule,
    OperationsMasterModule,
  ],
  declarations: [],
  exports: [],
})
export class OperationsModule {}
