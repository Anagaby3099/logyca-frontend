import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '@app/shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersMasterModule } from './users-master/users-master.module';
import { UserMainModule } from './user-main/user-main.module';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    ComponentsModule,
    UsersMasterModule,
    UserMainModule
  ],
  declarations: [
  ],
  exports: [],
})
export class UsersModule {}
