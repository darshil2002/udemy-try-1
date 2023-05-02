import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { RecipieServService } from '../recipie-serv.service';
import { Recipe } from '../recipe.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{

  id!:number;
  editMode=false;
  // recipe!:Recipe
  recipeForm!:FormGroup

  constructor(private route:ActivatedRoute,private recipeService:RecipieServService){}
  ngOnInit(): void {
    
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      if(params['id']!=null){
        this.editMode=true;
        
      }
      this.initForm()
      console.log(this.editMode)
    })
  }

// changing now 
private initForm(){

  let recipeName='';
  let recipeImagePath='';
  let recipeDescription='';
  // let recipeIngredients=new FormArray([])

  if(this.editMode){
    let recipe=this.recipeService.getRecipeWithDataFromIndex(this.id)
    console.log('if condition',recipe)
    console.log(recipe.name)
    recipeName=recipe.name;
    recipeImagePath=recipe.imagePath;
    recipeDescription=recipe.description;
    // if(recipe['ingredients']){
    //   console.log('yes in ingredients',recipe['ingredients'])
    //   for(let x of recipe.ingredients){
    //     (<FormArray>this.recipeForm.get('ingredients')).push(
    //       new FormGroup({
    //         'name': new FormControl(x.name),
    //         'amount': new FormControl(x.amount),
    //       })
    //     ) 
    //   }
    // }
  }
  this.recipeForm= new FormGroup({
    'name':new FormControl(recipeName),
    'imagePath':new FormControl(recipeImagePath),
    'description':new FormControl(recipeDescription),
    // 'ingredients': recipeIngredients
  })
}
// get controls() { 
//   return (<FormArray>this.recipeForm.get('ingredients')).controls;
// }
  onSubmit(){
    console.log('on submit ',this.recipeForm)
  }
} 
