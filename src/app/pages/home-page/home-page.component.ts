import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICategories } from 'src/app/models/meals';
import { selectCategories } from 'src/app/reducers/meal/meal.selectors';
import { categories } from 'src/app/reducers/meal/meal.actions';
import { MealService } from 'src/app/services/meal.service';
import { MealState } from 'src/app/reducers/meal/meal.reducer';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  
  public categories$: Observable<ICategories[]> = this.store$.pipe(
    select(selectCategories)
  );

  public loading = false;

  constructor(
    private store$: Store<MealState>,
    private mealService: MealService,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.mealService.getCategories().subscribe((data) => {
      this.store$.dispatch(categories({ data }));
      this.loading = false;
    });
  }
}
