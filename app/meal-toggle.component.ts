import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';

@Component({
  selector: 'meal-toggle',
  inputs: ['mealList'],
  directives: [MealDisplayComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal"></meal-display>
  `
})

export class MealToggleComponent {
  public mealList: Meal[];
}
