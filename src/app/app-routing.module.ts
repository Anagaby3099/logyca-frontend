import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONFIG } from './constantes/routes.const';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MedicionComponent } from './components/operaciones/medicion/medicion.component';
import { ParametrizacionComponent } from './components/operaciones/parametrizacion/parametrizacion.component';
import { VectorizacionComponent } from './components/operaciones/vectorizacion/vectorizacion.component';
import { CronogramaComponent } from './components/operaciones/cronograma/cronograma.component';

const routes: Routes = [
  { path: ROUTES_CONFIG[0].path, component: IndicadoresComponent },
  {
    path: ROUTES_CONFIG[1].path, children: [
      { path: ROUTES_CONFIG[1].child[0].path, component: ParametrizacionComponent },
      { path: ROUTES_CONFIG[1].child[1].path, component: VectorizacionComponent },
      { path: ROUTES_CONFIG[1].child[2].path, component: CronogramaComponent },
      { path: ROUTES_CONFIG[1].child[3].path, component: MedicionComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
