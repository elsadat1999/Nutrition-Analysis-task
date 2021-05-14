import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzeActionComponent } from './pages/analyze-action/analyze-action.component';
import { AnalyzeDetailsComponent } from './pages/analyze-details/analyze-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'analyze-action',
    pathMatch: 'full'
  },
  { path: 'analyze-action', component: AnalyzeActionComponent },
  { path: 'analyze-details', loadChildren: () => import('./pages/analyze-details/analyze-details.module').then(m => m.AnalyzeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyzeRoutingModule { }
