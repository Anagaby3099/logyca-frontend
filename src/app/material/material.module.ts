import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  exports: [MatExpansionModule, MatTabsModule],
})
export class MaterialModule {}
