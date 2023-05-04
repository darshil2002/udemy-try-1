import { Component,  OnInit,Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipieServService } from '../recipie-serv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  subscription!:Subscription
  recipes !: Recipe[];
  
  constructor(private recipeServ:RecipieServService,private router:Router,private route:ActivatedRoute){}



  ngOnInit(): void {
    this.subscription=this.recipeServ.updatedRecipeSubject.subscribe((res:Recipe[])=>{
      this.recipes=res;
    })
    this.recipes=this.recipeServ.getRecipes()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
    
}
