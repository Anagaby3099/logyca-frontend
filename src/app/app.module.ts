import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { NgbCollapseModule, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MedicionComponent } from './components/operaciones/medicion/medicion.component';
import { SharedModule } from './shared/shared.module';
import { ParametrizacionComponent } from './components/operaciones/parametrizacion/parametrizacion.component';
import { VectorizacionComponent } from './components/operaciones/vectorizacion/vectorizacion.component';
import { CronogramaComponent } from './components/operaciones/cronograma/cronograma.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndicadoresComponent,
    PageNotFoundComponent,
    MedicionComponent,
    ParametrizacionComponent,
    VectorizacionComponent,
    CronogramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
