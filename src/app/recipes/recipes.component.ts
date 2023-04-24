import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipieServService } from './recipie-serv.service';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipieServService]
})
export class RecipesComponent implements OnInit,OnDestroy{
  recipes=[];
  selectedRecipe!:Recipe
  mySubscription!:Subscription;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.recpServ.recipeSelected.subscribe((res:Recipe)=>{
      this.selectedRecipe=res 
    })
    // this.recipes=this.recpServ.getRecipes()

    // testing obs 
    this.mySubscription=interval(1000).subscribe(count=>{
      console.log(count)
    }) 
  }
  
  constructor (private recpServ:RecipieServService){}
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe()
  }

}
