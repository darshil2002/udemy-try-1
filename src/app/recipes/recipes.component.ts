import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipieServService } from './recipie-serv.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipieServService]
})
export class RecipesComponent implements OnInit{
  recipes=[];
  selectedRecipe!:Recipe
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.recpServ.recipeSelected.subscribe((res:Recipe)=>{
      this.selectedRecipe=res 
    })
    // this.recipes=this.recpServ.getRecipes()
  }
  constructor (private recpServ:RecipieServService){}

}
