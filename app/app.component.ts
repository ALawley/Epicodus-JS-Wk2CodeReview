import { Component } from 'angular2/core';
import { Day } from './day.model';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <day-list [dayList]="days" [mealList]="meals"></day-list>
    </div>
  `
})

export class AppComponent {
  public days: Day[];
  public meals: Meal[];
  constructor() {
    this.days = [
      new Day("Monday", 0),
      new Day("Tuesday", 1),
      new Day("Wednesday", 2),
      new Day("Thursday", 3),
      new Day("Friday", 4),
      new Day("Saturday", 5),
      new Day("Sunday", 6),
    ]
    this.meals = [
      new Meal("Cereal", 250, "Use skim milk next time", 0),
      new Meal("Burrito", 1050, "Need to eat healthier than this", 0),
      new Meal("Almonds", 200, "Healthy snack", 0),
      new Meal("Grilled Chicken Salad", 600, "Should use a lighter dressing next time", 0)
    ]
  }
}
