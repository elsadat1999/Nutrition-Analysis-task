import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoadersModule } from 'src/app/shared/shared-modules/skeleton-loaders/skeleton-loaders.module';
import { PlaceholderTableComponent } from './placeholder-table.component';
@NgModule({
  imports: [
    CommonModule,
    SkeletonLoadersModule
  ],
  declarations: [PlaceholderTableComponent],
  exports:[PlaceholderTableComponent]
})
export class PlaceholderTableModule { }
