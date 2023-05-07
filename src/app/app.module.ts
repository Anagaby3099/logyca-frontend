import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginModule } from './auth/login/login.module';
import { HomeComponent } from './pages/home/home.component';
import { OperationsModule } from './appui/project/operations/operations.module';
import { IndicatorsModule } from './appui/project/indicators/indicators.module';

const APP_CONTAINERS = [HomeComponent, PageNotFoundComponent];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    LoginModule,
  ],
  declarations: [AppComponent, APP_CONTAINERS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
