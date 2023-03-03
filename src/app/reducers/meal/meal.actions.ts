import { createAction, props } from '@ngrx/store';
import { ICategories, IMeals } from 'src/app/models/meals';

export enum mealActionsType {
  categories = '[MEALS] categories',
  searchedMeals = '[MEALS] searched meals',
  mealsByLetter = '[MEALS] meals by letter'
}

export const categories = createAction(mealActionsType.categories, props<{data: ICategories[]}>());
export const searchedMeals = createAction(mealActionsType.searchedMeals, props<{data: IMeals[]}>());
export const mealsByLetter = createAction(mealActionsType.mealsByLetter, props<{data: IMeals[]}>());



