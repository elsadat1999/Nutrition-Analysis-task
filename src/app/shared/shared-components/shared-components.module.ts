import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMassageComponent } from './error-massage/error-massage.component';
import { ConfirmMassageComponent } from './confirm-massage/confirm-massage.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ErrorMassageComponent,ConfirmMassageComponent,EmptyStateComponent],
  exports: [ErrorMassageComponent,ConfirmMassageComponent,EmptyStateComponent]
})
export class SharedComponentsModule { }
