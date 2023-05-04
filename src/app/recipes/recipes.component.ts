import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit,OnDestroy{
  mySubscription!:Subscription;
  constructor (){}
  ngOnInit(): void {
    
  }
  
  ngOnDestroy(): void {

  }

}
