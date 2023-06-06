import { NgModule } from '@angular/core';

import { UserEditComponent } from './user-edit.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    UserEditComponent
  ],
  exports: [ UserEditComponent ],
})
export class UserEditModule {}
