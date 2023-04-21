import { Component, ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingServiceService } from '../shopping-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild ('nameIng') nameIng!: ElementRef;
  @ViewChild ('numIng') numIng!:ElementRef;
  
  // @Output() ingrediantAdded= new EventEmitter<Ingredient>();
  constructor(private shopping:ShoppingServiceService){}
  addIng(){
    const tempName=this.nameIng.nativeElement.value;
    const tempIng=this.numIng.nativeElement.value;
    const sendData=new Ingredient(tempName,tempIng)
    // this.ingrediantAdded.emit(sendData)
    this.shopping.onIngrediantAdded(sendData)
  }
}
