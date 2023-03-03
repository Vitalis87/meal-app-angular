import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mealNode, MealState } from './meal.reducer';

const selectMealFeature = createFeatureSelector<MealState>(mealNode);

export const selectCategories = createSelector(
  selectMealFeature,
  (state: MealState) => state.categories
);
export const selectSearchedMeals = createSelector(
  selectMealFeature,
  (state: MealState) => state.searchedMeals
);
export const selectMealsByLetter = createSelector(
  selectMealFeature,
  (state: MealState) => state.mealsByLetter
);



