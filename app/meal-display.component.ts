import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { MealDetailsComponent } from './meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [MealDetailsComponent],
  template: `
    <h3 (click)="mealClicked()">{{ meal.name }}</h3>
    <meal-details *ngIf="detailShow" [meal]="meal"></meal-details>
  `
})

export class MealDisplayComponent {
  public meal: Meal;
  public detailsShow: boolean = false;
  dayClicked(): void {
    this.detailsShow = !this.detailsShow;
  }
}
