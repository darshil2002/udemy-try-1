import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { RecipieServService } from '../recipie-serv.service';
import { Recipe } from '../recipe.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipe!: Recipe;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipieServService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (params['id'] != null) {
        this.editMode = true;
      }
      this.initForm();
      console.log(this.editMode);
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipeWithDataFromIndex(this.id);
      console.log('if condition', recipe);
      console.log(recipe.name);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        console.log('yes in ingredients', recipe['ingredients']);
        for (let x of recipe.ingredients) {
          (<FormArray>(<unknown>recipeIngredients)).push(
            new FormGroup({
              name: new FormControl(x.name, Validators.required),
              amount: new FormControl(x.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[1+9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  
  }
  addNewIngredient() {
    (<FormArray>(<unknown>this.recipeForm.get('ingredients'))).push(
      new FormGroup({
        name: new FormControl(null,Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[1+9]*$/),
        ]),
      })
    );
  }
  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onSubmit() {

    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.onCancle()
  }
  onCancle(){
    this.router.navigate(['../'],{relativeTo:this.route })
  }
  onIngredientDelete(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
