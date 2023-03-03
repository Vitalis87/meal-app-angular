import { Component, Input } from '@angular/core';
import { IMeals } from 'src/app/models/meals';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
})
export class MealItemComponent {
 @Input() meal: IMeals
}
