import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingServiceService } from './shopping-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients!:Ingredient[]
  subscription!:Subscription;
  constructor(private shoping:ShoppingServiceService){}

  
  ngOnInit(): void {
    this.ingredients=this.shoping.getIngrediant()
    this.subscription= this.shoping.myUpdetedIngredianta.subscribe((res:Ingredient[])=>{
      this.ingredients=res
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

  onEditItem(index : number){
    this.shoping.startedEditing.next(index)
  }
}
