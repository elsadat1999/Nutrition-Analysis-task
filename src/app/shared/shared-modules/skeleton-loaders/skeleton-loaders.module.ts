import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoadersComponent } from './skeleton-loaders.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SkeletonLoadersComponent],
  exports:[SkeletonLoadersComponent]
})
export class SkeletonLoadersModule { }
