import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectModule } from './appui/project/project.module';
import { IndicadoresComponent } from './appui/project/indicadores/indicadores.component';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgBootstrapModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    ProjectModule,
  ],
  declarations: [AppComponent, IndicadoresComponent, PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
