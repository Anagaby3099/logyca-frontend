import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { SharedModule } from '@app/shared/shared.module';
import { OperationsModule } from '../operations.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class ProductModule {}
