import { NgModule } from '@angular/core';

import { ComponentsModule } from '@app/appui/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { UsersListComponent } from './users-list.component';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule
  ],
  declarations: [
    UsersListComponent
  ],
  exports: [ UsersListComponent ],
})
export class UsersListModule {}
