import { Injectable,Output,EventEmitter} from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  myUpdetedIngredianta=new EventEmitter<Ingredient[]>();
  constructor() { }

  ingredients:Ingredient[]=[
    new Ingredient('tomato',5),
    new Ingredient('potato',5)
  ]
  getIngrediant(){
    return this.ingredients;
  }

  onIngrediantAdded(data:Ingredient){
    this.ingredients.push(data);
    this.myUpdetedIngredianta.emit(this.ingredients)
  }
  addingIngrediantToShoppingList(data:Ingredient[]){
    this.ingredients.push(...data)
    this.myUpdetedIngredianta.emit(this.ingredients.slice())
  }
}
