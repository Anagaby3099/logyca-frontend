import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InputSearchComponent } from './input-search/input-search.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [InputSearchComponent],
  exports: [InputSearchComponent],
})
export class ComponentsModule {}
