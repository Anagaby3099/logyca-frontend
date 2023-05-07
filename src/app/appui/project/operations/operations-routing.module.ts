import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsMasterComponent } from './operations-master/operations-master.component';

const routes: Routes = [
  {
    path: ':route',
    component: OperationsMasterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationsRoutingModule {}
