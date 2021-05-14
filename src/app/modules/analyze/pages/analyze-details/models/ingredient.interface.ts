export interface Ingredient {

     text:string;
     parsed:IngredientData[];

}


 interface IngredientData{
    food:string,
    foodId:string,
    foodMatch:string,
    measure:string,
    measureURI:string,
    nutrients:{},
    quantity:number,
    retainedWeight:number,
    status:string,
    weight:number
 }