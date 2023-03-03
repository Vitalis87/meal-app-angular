import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMeals } from 'src/app/models/meals';
import { MealService } from 'src/app/services/meal.service';


@Component({
  selector: 'app-meal-details-page',
  templateUrl: './meal-details-page.component.html',
})
export class MealDetailsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private mealsService: MealService){}

  public meal = <IMeals>{}
  public mealId: string | null = ''
  public array = new Array<[]>(20);

  
  ngOnInit(): void {
    this.mealId = this.route.snapshot.paramMap.get('id')
    this.mealsService.getMealDetails(this.mealId).subscribe(res => this.meal = res)
  }

}
