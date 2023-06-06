import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { UserMainComponent } from './user-main.component';
import { UserEditModule } from '../user-edit/user-edit.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  imports: [
    SharedModule,
    UserEditModule,
    BreadcrumbModule
  ],
  declarations: [ UserMainComponent ],
  exports: [ UserMainComponent ],
})
export class UserMainModule {}
