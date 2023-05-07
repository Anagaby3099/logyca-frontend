import { NgModule } from '@angular/core';
import { VectorizationComponent } from './vectorizacion.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [VectorizationComponent],
  exports: [VectorizationComponent],
})
export class VectorizationModule {}
