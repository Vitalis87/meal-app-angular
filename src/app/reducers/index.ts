import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { mealNode, mealReducer, MealState } from './meal/meal.reducer';

export interface State {
[mealNode]: MealState,
}

export const reducers: ActionReducerMap<State> = {
[mealNode]: mealReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
