import { Injectable,EventEmitter,Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingServiceService } from '../shopping-list/shopping-service.service';
@Injectable({
  providedIn: 'root'
})
export class RecipieServService {

  constructor(private shoppingService:ShoppingServiceService) { }
  @Output() recipeSelected=new EventEmitter<Recipe>()
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [new Ingredient('onion',5),
     new Ingredient ('ginger', 4)
    ]),
    new Recipe('another', 'hello bro', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('water',4),
      new Ingredient('tomato',34),
    ]),
  
  ];

  getRecipes(){
    return this.recipes.slice()
  }
  getSelectedItemIngrediant(data:Ingredient[]){
    console.log(data);
    this.shoppingService.addingIngrediantToShoppingList(data)
  }
  getRecipeWithDataFromIndex(index:number){
    return this.recipes[index]
  }
}
