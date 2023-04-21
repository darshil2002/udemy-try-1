import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingServiceService } from './shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients!:Ingredient[]

  constructor(private shoping:ShoppingServiceService){}

  ngOnInit(): void {
   this.ingredients=this.shoping.getIngrediant()
   this.shoping.myUpdetedIngredianta.subscribe((res:Ingredient[])=>{
    this.ingredients=res
   })
  }
  
  onIngrediantAdded(data:Ingredient){
    // this.ingredients.push(data);
    // this.shoping.onIngrediantAdded(data)
  }
}
