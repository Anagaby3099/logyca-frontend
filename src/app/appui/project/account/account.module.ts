import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { AccountEditModule } from './account-edit/account-edit.module';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [SharedModule, AccountEditModule],
  declarations: [AccountComponent],
  exports: [],
})
export class AccountModule {}
