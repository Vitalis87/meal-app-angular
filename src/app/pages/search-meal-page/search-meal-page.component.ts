import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMeals } from 'src/app/models/meals';
import { searchedMeals } from 'src/app/reducers/meal/meal.actions';
import { MealState } from 'src/app/reducers/meal/meal.reducer';
import { selectSearchedMeals } from 'src/app/reducers/meal/meal.selectors';
import { MealService } from 'src/app/services/meal.service';


@Component({
  selector: 'app-search-meal-page',
  templateUrl: './search-meal-page.component.html',
})
export class SearchMealPageComponent {
  constructor(
    private store$: Store<MealState>,
    private mealService: MealService
  ) {}

  public meals$: Observable<IMeals[]> = this.store$.pipe(
    select(selectSearchedMeals)
  );

  form = new FormGroup({
    search: new FormControl<string>(''),
  });

  submit() {
    if(this.form.value.search?.length) {
      this.mealService.getMealByName(this.form.value.search).subscribe((data) => {
        this.store$.dispatch(searchedMeals({ data }));
      });
    } else {
      this.mealService.getMealByName(this.form.value.search).subscribe(() => {
        this.store$.dispatch(searchedMeals({ data: [] }));
      });
    }

  }
}
