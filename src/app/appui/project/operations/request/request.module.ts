import { NgModule } from '@angular/core';
import { RequestComponent } from './request.component';
import { SharedModule } from '@app/shared/shared.module';
import { OperationsModule } from '../operations.module';
import { ComponentsModule } from '@app/appui/components/components.module';

@NgModule({
  imports: [SharedModule, ComponentsModule],
  declarations: [RequestComponent],
  exports: [RequestComponent],
})
export class RequestModule {}
