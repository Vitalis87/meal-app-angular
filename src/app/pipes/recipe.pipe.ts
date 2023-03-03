import { Pipe, PipeTransform } from '@angular/core';
import { IMeals } from '../models/meals';



@Pipe({
  name: 'recipe'
})
export class RecipePipe implements PipeTransform {

  transform(value: Array<[]>, arg1: IMeals, arg2: string): string[] {

    const arr: string[] = []
    for(let i = 0; i < value.length; i++) {
      if(arg2 === 'ingredients' && arg1[`strIngredient${i + 1}`] && arg1[`strIngredient${i + 1}`] !== ' ') arr.push(arg1[`strIngredient${i + 1}`])
      if(arg2 === 'measures' && arg1[`strMeasure${i + 1}`] && arg1[`strMeasure${i + 1}`] !== ' ') arr.push(arg1[`strMeasure${i + 1}`])
    }
     return arr
  }

}
