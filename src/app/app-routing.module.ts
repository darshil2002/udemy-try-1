import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoRecipesSelectedComponent } from './recips/no-recipes-selected/no-recipes-selected.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = 
[
  { path:'' ,redirectTo:'/recipes',pathMatch:'full'},
  { path:'recipes' ,component: RecipesComponent,
  children:[
    { path:'',component:NoRecipesSelectedComponent},
    // {path:'new',component: },           
    {path:'app-recipe-details', component:RecipeEditComponent },
    {path:'new', component:RecipeEditComponent },
    { path:':id', component: RecipeDetailsComponent},
    {path:':id/edit', component:RecipeEditComponent },
]},
  {path : 'shopping-list', component: ShoppingListComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
