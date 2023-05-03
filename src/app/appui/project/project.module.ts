import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ScheduleModule } from './schedule/schedule.module';
import { OperationsModule } from './operaciones/operations.module';

@NgModule({
  imports: [CommonModule, FormsModule, ScheduleModule, OperationsModule],
  declarations: [],
  exports: [],
})
export class ProjectModule {}
