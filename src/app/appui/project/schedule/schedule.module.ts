import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { FormsModule } from '@angular/forms';
import { OperationsModule } from '../operaciones/operations.module';
import { NgBootstrapModule } from 'src/app/ng-bootstrap/ng-bootstrap.module';
// components
import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [CommonModule, OperationsModule, FormsModule, NgBootstrapModule],
  declarations: [ScheduleComponent],
  exports: [ScheduleComponent],
})
export class ScheduleModule {}
