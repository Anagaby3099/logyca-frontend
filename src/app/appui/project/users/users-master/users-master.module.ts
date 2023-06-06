import { NgModule } from '@angular/core';
import { ComponentsModule } from '@app/appui/components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { UsersMasterComponent } from './users-master.component';
import { UsersListModule } from '../users-list/users-list.module';

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    UsersListModule
  ],
  declarations: [ UsersMasterComponent ],
  exports: [],
})
export class UsersMasterModule {}
