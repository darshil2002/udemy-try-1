import { Component, ViewChild,ElementRef,Output,EventEmitter, OnInit ,OnDestroy} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingServiceService } from '../shopping-service.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription!:Subscription  
  editMode=false;
  edditedItemIndex!:number;
  editedItem!:Ingredient;
  
  @ViewChild('f')slForm!:NgForm;

  // @Output() ingrediantAdded= new EventEmitter<Ingredient>();
  constructor(private shopping:ShoppingServiceService){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngOnInit(): void {
    this.subscription= this.shopping.startedEditing.subscribe((index:number)=>{
      this.edditedItemIndex=index
      this.editMode=true
      this.editedItem=this.shopping.getMyIngrediant(index)
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    })
  }
  onSubmit(form:NgForm){
    const value=form.value;
    const sendData=new Ingredient(value.name,value.amount)
    if(this.editMode){
      this.shopping.updateIngredient(this.edditedItemIndex,sendData)
    }
    else{
      this.shopping.onIngrediantAdded(sendData)
    }
    this.editMode=false;
    form.reset()
  }
  onClear(){
    this.slForm.reset()
    this.editMode=false;
  }
  deleteItem(){
    this.shopping.deleteIngredient(this.edditedItemIndex)
    this.slForm.reset()
  }
}
