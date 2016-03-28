import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "size",
  pure: false
})

export class SizePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredSize = args[0];
    if(desiredSize === "Show Large Meals") {
      return input.filter((meal) => {
        if (meal.calories >= 450) {
          return true;
        }
      });
    } else if (desiredSize === "Show Small Meals") {
      return input.filter((meal) => {
        if (meal.calories < 450) {
          return true;
        }
      });
    } else {
      return input;
    }
  }
}
