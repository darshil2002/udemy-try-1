import { Component, Input, } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipieServService } from '../../recipie-serv.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() index!:number;

  constructor (){}
  // constructor (private serv:RecipieServService){}
  // @Output() recipeSelected= new EventEmitter <Recipe>();
  onSelected(){
    // this.recipeSelected.emit()
    // this.serv.recipeSelected.next(this.recipe)
  }
  
}
