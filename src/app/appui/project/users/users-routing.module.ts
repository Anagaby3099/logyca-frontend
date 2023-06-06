import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersMasterComponent } from './users-master/users-master.component';
import { UserMainComponent } from './user-main/user-main.component';

const routes: Routes = [
  {
    path: '',
    component: UsersMasterComponent,
  },
  {
    path: 'crear',
    component: UserMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}