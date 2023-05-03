import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InputSearchComponent } from './input-search/input-search.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [InputSearchComponent],
  exports: [InputSearchComponent],
})
export class ComponentsModule {}
