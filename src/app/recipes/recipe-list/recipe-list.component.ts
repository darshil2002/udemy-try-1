import { Component,  OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipieServService } from '../recipie-serv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes !: Recipe[];
  
  constructor(private recipeServ:RecipieServService,private router:Router,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.recipeServ.updatedRecipeSubject.subscribe((res:Recipe[])=>{
      this.recipes=res;
    })
    this.recipes=this.recipeServ.getRecipes()
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
    
}
