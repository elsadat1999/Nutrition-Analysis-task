import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze-action',
  templateUrl: './analyze-action.component.html',
  styleUrls: ['./analyze-action.component.scss']
})
export class AnalyzeActionComponent implements OnInit {
  @ViewChild('foodTextAnalysis', { read: ElementRef }) foodTextAnalysis: ElementRef | undefined;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  analyze() {
    const ingr = this.foodTextAnalysis?.nativeElement.value
    this.router.navigate(['/analyze/analyze-details'], { queryParams: { ingr } })
  }

}
