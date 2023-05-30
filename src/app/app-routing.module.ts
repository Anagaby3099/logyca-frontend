import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { IndicatorsComponent } from './appui/project/indicators/indicators.component';
import { AuthGuard } from './auth/guards/isLoggedInGuard/is-logged-in.guard';
import { AccountComponent } from './appui/project/account/account.component';
import { UsersComponent } from './appui/project/users/users.component';
import { SolutionCenterComponent } from './appui/project/solution-center/solution-center.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/indicadores',
        pathMatch: 'full',
      },
      {
        path: 'indicadores',
        component: IndicatorsComponent,
      },
      {
        path: 'operaciones',
        loadChildren: () =>
          import('./appui/project/operations/operations.module').then(
            (m) => m.OperationsModule
          ),
      },
      {
        path: 'usuarios',
        component: UsersComponent
      },
      {
        path: 'centro-soluciones',
        component: SolutionCenterComponent
      },
      {
        path: 'cuenta',
        component: AccountComponent
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
