import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { MealDisplayComponent } from './meal-display.component';

@Component({
  selector: 'day-display',
  inputs: ['day', 'meals'],
  directives: [MealDisplayComponent],
  template: `
    <h3 (click)="dayClicked()">{{ day.name }} - {{ day.totalCalories() }} calories</h3>
    <meal-display *ngIf="mealsShow" *ngFor="#currentMeal of meals" [meal]="currentMeal"></meal-display>
  `
})

export class DayDisplayComponent {
  public day: Day;
  public meals: Meal[];
  public mealsShow: boolean = false;
  dayClicked(): void {
    this.mealsShow = !this.mealsShow;
  }
}
