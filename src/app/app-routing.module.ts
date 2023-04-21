import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoRecipesSelectedComponent } from './recips/no-recipes-selected/no-recipes-selected.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
const routes: Routes = 
[
  { path:'' ,redirectTo:'/recipes',pathMatch:'full'},
  { path:'recipes' ,component: RecipesComponent,
  children:[
    { path:'',component:NoRecipesSelectedComponent},
    // {path:'new',component: },           
    { path:':id', component: RecipeDetailsComponent},
    //  {path:':number', component: RecipeDetailsComponent}
]},
  {path : 'shopping-list', component: ShoppingListComponent}

  
]
// {path:'', redirectTo: '/app-recipes', pathMatch: 'full'  }
//   {path:'', component:RecipesComponent, children:[
//     {path:'',component:NoRecipesSelectedComponent},
//     {path:':id',component:RecipeDetailsComponent}
//   ]},
//   {path:'app-recipes', component:RecipesComponent,
//   children:[
//     {path:'',component:NoRecipesSelectedComponent},
//     {path:':id',component:RecipeDetailsComponent}
//   ]},
//   {path:'app-shopping-edit', component:ShoppingListComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
