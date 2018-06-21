import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorTagComponent } from './components/color-tag/color-tag.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorTagComponent],
  exports: [ColorTagComponent]
})
export class SharedModule {}
