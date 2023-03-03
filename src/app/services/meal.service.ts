import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { IMealsData, IMeals, ICategories, IIngredients, IIngredientsData, ICategory, ICategoryData } from '../models/meals';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getCategories(): Observable<ICategories[]>{
    return this.http.get<Pick<IMealsData, 'categories'>>('https://www.themealdb.com/api/json/v1/1/categories.php').pipe(map(response => response.categories), catchError(this.errorHandler.bind(this)))
  }

  getMealByName(name: string | null | undefined): Observable<IMeals[]>{
    return this.http.get<Pick<IMealsData, 'meals'>>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).pipe(map(response => response.meals), catchError(this.errorHandler.bind(this)))
  }

  getMealDetails(id: string | null): Observable<IMeals>{
    return this.http.get<Pick<IMealsData, 'meals'>>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).pipe(map(response => response.meals[0]
    ), catchError(this.errorHandler.bind(this)))
  }

  getMealsByLetter(letter: string): Observable<IMeals[]>{
    return this.http.get<Pick<IMealsData, 'meals'>>(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`).pipe(map(response => response.meals
    ), catchError(this.errorHandler.bind(this)))
  }

  getMealsByIngredient(): Observable<IIngredients[]>{
    return this.http.get<IIngredientsData<IIngredients[]>>(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`).pipe(map(response => response.meals), catchError(this.errorHandler.bind(this)))
  }

  getMealByCategory(category: string | null): Observable<ICategory[]>{
    return this.http.get<ICategoryData<ICategory[]>>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).pipe(map(response => response.meals), catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
