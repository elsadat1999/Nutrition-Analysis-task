import { Component, Input, OnInit } from '@angular/core';
import { Nutrients, TotalNutrients } from '../../models/total-nutrients.interface';

@Component({
  selector: 'total-nutrients-table-component',
  templateUrl: './total-nutrients-table.component.html',
  styleUrls: ['./total-nutrients-table.component.scss']
})
export class TotalNutrientsTableComponent implements OnInit {
@Input() totalNutrients:TotalNutrients = new TotalNutrients(); ;
nutrients:Nutrients[]= [];
  constructor() { }

  ngOnInit() {
    this.nutrients = Object.values(this.totalNutrients);
  }

}
