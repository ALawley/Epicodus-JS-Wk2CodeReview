import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "daypipe",
  pure: false
})

export class DayPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredDay = args[0];
    return input.filter((meal) => {
      if (meal.day === desiredDay) {
        return true;
      }
    });
  }
}
