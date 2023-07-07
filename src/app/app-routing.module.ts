import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FoodDetailsComponent } from './component/food-details/food-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'food/:url',component:FoodDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
