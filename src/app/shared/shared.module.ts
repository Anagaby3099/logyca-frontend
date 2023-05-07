import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgBootstrapModule,
  ],
})
export class SharedModule {}
