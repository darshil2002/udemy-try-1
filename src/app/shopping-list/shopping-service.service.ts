import { Injectable,Output,} from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { Subject, Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  // myUpdetedIngredianta=new EventEmitter<Ingredient[]>();
  myUpdetedIngredianta=new Subject<Ingredient[]>();
  startedEditing=new Subject<number>()

  constructor() { }

  ingredients:Ingredient[]=[
    new Ingredient('tomato',5),
    new Ingredient('potato',5)
  ]
  getIngrediant(){
    return this.ingredients;
  }
  getMyIngrediant(index:number){
    return this.ingredients[index]
  }

  onIngrediantAdded(data:Ingredient){
    this.ingredients.push(data);
    this.myUpdetedIngredianta.next(this.ingredients)
  }
  addingIngrediantToShoppingList(data:Ingredient[]){
    this.ingredients.push(...data)
    this.myUpdetedIngredianta.next(this.ingredients.slice())
  }

  updateIngredient(index:number, newIngredient:Ingredient){
    this.ingredients[index]=newIngredient
    this.myUpdetedIngredianta.next(this.ingredients.slice())
  } 
  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.myUpdetedIngredianta.next(this.ingredients.slice())
  }
}
