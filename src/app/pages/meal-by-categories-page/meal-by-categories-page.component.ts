import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/models/meals';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal-by-categories-page',
  templateUrl: './meal-by-categories-page.component.html',
})
export class MealByCategoriesPageComponent implements OnInit {

  public meals: ICategory[] = []
  public category: string | null = ''

  constructor(private mealService: MealService, private route: ActivatedRoute){}
  
  
  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')
    
    this.mealService.getMealByCategory(this.category).subscribe(data => {
      this.meals = data
    })
  }

}
