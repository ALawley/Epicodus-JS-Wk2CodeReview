import { Meal } from './meal.model';

export class Day {
  constructor(public name: string, public id: number){

  }
  totalCalories(meals: Meal[]): number {
    var calorieTotal: number = 0;
    for (var i: number = 0; i < meals.length; i++) {
      if (meals[i].day === this.id) {
        calorieTotal += meals[i].calories
      }
    }
    return calorieTotal;
  }
}
