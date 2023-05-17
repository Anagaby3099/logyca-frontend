import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { AccountEditComponent } from './account-edit.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AccountEditComponent],
  exports: [AccountEditComponent],
})
export class AccountEditModule {}
