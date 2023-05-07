import { NgModule } from '@angular/core';
// components
import { ScheduleComponent } from './schedule.component';
// shared
import { SharedModule } from '@app/shared/shared.module';
import { OperationsModule } from '../operations.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ScheduleComponent],
  exports: [ScheduleComponent],
})
export class ScheduleModule {}
