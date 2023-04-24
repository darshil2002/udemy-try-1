import { Injectable,Output,} from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  // myUpdetedIngredianta=new EventEmitter<Ingredient[]>();
  myUpdetedIngredianta=new Subject<Ingredient[]>();

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
    this.myUpdetedIngredianta.next(this.ingredients)
  }
  addingIngrediantToShoppingList(data:Ingredient[]){
    this.ingredients.push(...data)
    this.myUpdetedIngredianta.next(this.ingredients.slice())
  }
}
