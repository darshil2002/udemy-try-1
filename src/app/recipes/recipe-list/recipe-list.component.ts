import { Component,  OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipieServService } from '../recipie-serv.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes !: Recipe[];
  
  constructor(private recipeServ:RecipieServService){}


  ngOnInit(): void {
    this.recipes=this.recipeServ.getRecipes()
  }
    
}
