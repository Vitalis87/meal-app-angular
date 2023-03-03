import { createReducer, on } from '@ngrx/store';
import { ICategories, IMeals } from 'src/app/models/meals';
import * as MealActions from './meal.actions';

export const mealNode = 'meal'

export interface MealState {
 categories: ICategories[];
 searchedMeals: IMeals[]
 mealsByLetter: IMeals[]

}

const initialState: MealState = {
    categories: [],
    searchedMeals: [],
    mealsByLetter: []
}


export const mealReducer = createReducer(
    initialState,
    on(MealActions.categories, (state, {data}) => ({...state, categories: data})),
    on(MealActions.searchedMeals, (state, {data}) => ({...state, searchedMeals: data})),
    on(MealActions.mealsByLetter, (state, {data}) => ({...state, mealsByLetter: data})),
    on(state => state)
)