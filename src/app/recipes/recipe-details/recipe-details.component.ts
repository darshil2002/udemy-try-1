import { Component,Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipieServService } from '../recipie-serv.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  
  constructor(private recipeService:RecipieServService , private route:ActivatedRoute){}
  
  //  @Input() 
  selRecipe!:Recipe;
  id!:number
  //  constructor(){
    //   console.log(this.selRecipe)
    //  }


    ngOnInit(){
     this.route.params.subscribe((params:Params)=>{
       this.id=+params['id'];
      //  console.log(typeof(params['id'])); string 
       this.selRecipe=this.recipeService.getRecipeWithDataFromIndex(this.id)
     })
    }


   addItemToShoppingListTS(){
    // console.log(this.selRecipe.ingredients)
    this.recipeService.getSelectedItemIngrediant(this.selRecipe.ingredients)
   }

}
