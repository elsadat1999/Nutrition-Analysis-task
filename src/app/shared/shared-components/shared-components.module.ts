import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMassageComponent } from './error-massage/error-massage.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ErrorMassageComponent],
  exports: [ErrorMassageComponent]
})
export class SharedComponentsModule { }
