import { NgModule } from '@angular/core';
import {
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  exports: [
    NgbModule,
    NgbCollapseModule,
    NgbDatepickerModule,
  ],
})
export class NgBootstrapModule {}
