import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { MealToggleComponent } from './meal-toggle.component';

@Component({
  selector: 'day-display',
  inputs: ['day', 'mealList'],
  directives: [MealToggleComponent],
  template: `
    <h2 (click)="dayClicked()">{{ day.name }} - {{ day.totalCalories(mealList) }} calories</h2>
    <meal-toggle *ngIf="mealsShow" [mealList]="mealList"></meal-toggle>
  `
})

export class DayDisplayComponent {
  public day: Day;
  public mealList: Meal[];
  public mealsShow: boolean = false;
  dayClicked(): void {
    this.mealsShow = !this.mealsShow;
  }
}
