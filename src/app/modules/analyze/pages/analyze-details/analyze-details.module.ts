import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnalyzeDetailsComponent } from './analyze-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { PlaceholderTableModule } from 'src/app/shared/shared-modules/placeholder-table/placeholder-table.module';
const routes: Routes = [
  { path: '', component: AnalyzeDetailsComponent },
];
@NgModule({
  declarations:[AnalyzeDetailsComponent,HeaderComponent,ItemsTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    PlaceholderTableModule
  ]
})
export class AnalyzeModule { }
