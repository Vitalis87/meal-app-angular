import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMeals } from 'src/app/models/meals';
import { mealsByLetter } from 'src/app/reducers/meal/meal.actions';
import { selectMealsByLetter } from 'src/app/reducers/meal/meal.selectors';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal-by-letter-page',
  templateUrl: './meal-by-letter-page.component.html',
})
export class MealByLetterPageComponent {
  public letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  public meals$: Observable<IMeals[]> = this.store$.pipe(select(selectMealsByLetter))

  constructor(private mealService: MealService, private store$: Store) {}
  
  setMealsByLetter(letter: string) {
    this.mealService
      .getMealsByLetter(letter)
      .subscribe((data) => this.store$.dispatch(mealsByLetter({ data })));
  }

}
