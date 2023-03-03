import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MealByCategoriesPageComponent } from './pages/meal-by-categories-page/meal-by-categories-page.component';
import { MealByLetterPageComponent } from './pages/meal-by-letter-page/meal-by-letter-page.component';
import { MealDetailsPageComponent } from './pages/meal-details-page/meal-details-page.component';
import { SearchMealPageComponent } from './pages/search-meal-page/search-meal-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'letter',
    component: MealByLetterPageComponent
  },
  {
    path: 'search-meal',
    component: SearchMealPageComponent
  },
  {
    path: 'search-meal/:id',
    component: MealDetailsPageComponent
  },
  {
    path: 'category/:category',
    component: MealByCategoriesPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
