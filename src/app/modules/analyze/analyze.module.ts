import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzeRoutingModule } from './analyze-routing.module';
import { RouterModule } from '@angular/router';
import { AnalyzeActionComponent } from './pages/analyze-action/analyze-action.component';
import { AnalyzeDetailsComponent } from './pages/analyze-details/analyze-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[AnalyzeActionComponent],
  imports: [
    CommonModule,
    AnalyzeRoutingModule,
    FormsModule
  ]
})
export class AnalyzeModule { }
