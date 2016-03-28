import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  directives: [EditMealDetailsComponent],
  template: `
    <h4>Calories: {{ meal.calories }}</h4>
    <h4>Details: {{ meal.details }}</h4>
    <button (click)=editMeal()>Edit</button>

    <edit-meal-details *ngIf="mealToEdit" [meal]="meal" (onEndEdit)="mealToEdit = false"></edit-meal-details>
  `
})

export class MealDetailsComponent {
  public mealToEdit: boolean = false;
  public meal: Meal;
  public onEditMeal: EventEmitter<Meal>;
  constructor() {
    this.onEditMeal = new EventEmitter();
  }
  editMeal() {
    this.mealToEdit = true;
  }
}
