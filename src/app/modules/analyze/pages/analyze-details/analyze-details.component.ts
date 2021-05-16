import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from 'src/app/shared/confing/config';
import { HttpService } from 'src/app/shared/services/http.service';
import { Ingredient } from './models/ingredient.interface';
import { TotalNutrients } from './models/total-nutrients.interface';

@Component({
  selector: 'app-analyze-details',
  templateUrl: './analyze-details.component.html',
  styleUrls: ['./analyze-details.component.scss']
})
export class AnalyzeDetailsComponent implements OnInit {
  ingredients:Ingredient[] =[]
  placeholderLoading:boolean = false;
  totalWeight:number = 0;
  totaCalories:number = 0;
  totalNutrients:TotalNutrients = new TotalNutrients();
  totalNutrientsToggle:boolean = false;
  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }
  ngOnInit() {
  this.getAnalyzeNutrition();
  }

  getAnalyzeNutrition() {
    this.placeholderLoading = true;
    const query ={
      ingr:this.route.snapshot.queryParams.ingr.split('\n')
    }
   return this.httpService.post(Config.nutritionDetails,query).subscribe(res=>{
      this.ingredients = res.ingredients;
      this.totalWeight = res.totalWeight;
      this.totaCalories = res.calories;
      this.totalNutrients = res.totalNutrients;
      this.placeholderLoading=false;
    },error=>{
      this.placeholderLoading=false;
    })
  }


}
