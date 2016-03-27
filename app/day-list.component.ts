import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { DayDisplayComponent } from './day.component';

@Component({
  selector: 'day-list',
  inputs: ['dayList', 'mealList'],
  directives: [DayDisplayComponent],
  template: `
    <day-display *ngFor="#currentDay of dayList" [day]="currentDay" [meals]="mealList | day:currentDay.name"
  `
})

export class DayListComponent {
  public dayList: Day[];
  public mealList: Meal[];
}
