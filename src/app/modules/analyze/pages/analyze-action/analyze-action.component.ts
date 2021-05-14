import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze-action',
  templateUrl: './analyze-action.component.html',
  styleUrls: ['./analyze-action.component.scss']
})
export class AnalyzeActionComponent implements OnInit {
  @ViewChild('foodTextAnalysis',{read: ElementRef}) foodTextAnalysis:ElementRef | undefined;
  servingsCount: number = 1;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  decrement():void {
    if (this.servingsCount == 1) return;
    this.servingsCount--
  }
  increment():void  {
    console.log(this.foodTextAnalysis?.nativeElement.value.split('\n'))
    this.servingsCount++
  }
  analyze(){
    const ingr = this.foodTextAnalysis?.nativeElement.value
    this.router.navigate(['/analyze/analyze-details'],{queryParams:{ingr,servings:this.servingsCount}})
  }
 
}
