import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "delete",
  pure: false
})

export class DeletePipe implements PipeTransform {
  transform(input: Meal[], args) {
    return input.filter((meal) => {
      if (!meal.delete) {
        return true;
      }
    });
  }
}
