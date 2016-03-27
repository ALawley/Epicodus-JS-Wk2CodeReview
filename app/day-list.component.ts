import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';

@Component({
  selector: 'day-list',
  inputs: ['dayList', 'mealList'],
  template: `
    <day-display *ngFor="#currentDay of dayList" [day]="currentDay" [meals]="mealList | day:currentDay.name"
  `
})
