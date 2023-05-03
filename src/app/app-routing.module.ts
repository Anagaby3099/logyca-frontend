import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from './constantes/routes.const';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { IndicadoresComponent } from './appui/project/indicadores/indicadores.component';
import { ScheduleComponent } from './appui/project/schedule/schedule.component';
import { ParameterizationComponent } from './appui/project/operaciones/parameterization/parameterization.component';
import { VectorizationComponent } from './appui/project/operaciones/vectorization/vectorizacion.component';
import { MeasuringComponent } from './appui/project/operaciones/measuring/measuring.component';
import { RequestComponent } from './appui/project/operaciones/request/request.component';
import { ProductComponent } from './appui/project/operaciones/product/product.component';

const routes: Routes = [
  { path: ROUTES_CONFIG[0].path, component: IndicadoresComponent },
  {
    path: ROUTES_CONFIG[1].path,
    children: [
      {
        path: ROUTES_CONFIG[1].child[0].path,
        component: ParameterizationComponent,
      },
      {
        path: ROUTES_CONFIG[1].child[1].path,
        component: VectorizationComponent,
      },
      { path: ROUTES_CONFIG[1].child[2].path, component: ScheduleComponent },
      { path: ROUTES_CONFIG[1].child[3].path, component: MeasuringComponent },
      { path: ROUTES_CONFIG[1].child[4].path, component: RequestComponent },
      { path: ROUTES_CONFIG[1].child[5].path, component: ProductComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
