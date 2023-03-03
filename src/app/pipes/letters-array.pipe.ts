import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lettersArray'
})
export class LettersArrayPipe implements PipeTransform {

  transform(value: string): string[] {
    return value.split('');
  }

}
