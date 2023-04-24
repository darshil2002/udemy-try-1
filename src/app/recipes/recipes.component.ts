import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Recipe } from './recipe.model';
import { RecipieServService } from './recipie-serv.service';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipieServService]
})
export class RecipesComponent implements OnInit,OnDestroy{
  // recipes=[];
  // selectedRecipe!:Recipe
  mySubscription!:Subscription;
  constructor (){}
  ngOnInit(): void {


  }
  
  ngOnDestroy(): void {

  }

}
