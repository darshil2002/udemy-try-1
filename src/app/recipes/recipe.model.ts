import { Ingredient } from "../Shared/ingredient.model";

export class Recipe{

    // public name:string;
    // public description:string;
    // public imagePath:string;
    // public ingredients:Ingredient[];
    constructor(public name:string,public description:string,public imagePath:string, public ingredients:Ingredient[]){
        // this.name=name;
        // this.description=description,
        // this.imagePath=imagePath;
        // this.ingredients=ingredients;
    }
    
}