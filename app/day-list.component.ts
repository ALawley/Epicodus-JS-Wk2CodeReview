import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { DayPipe } from './day.pipe';
import { DeletePipe } from './delete.pipe';
import { DayDisplayComponent } from './day.component';

@Component({
  selector: 'day-list',
  inputs: ['dayList', 'mealList'],
  pipes: [DayPipe, DeletePipe],
  directives: [DayDisplayComponent],
  template: `
    <day-display *ngFor="#currentDay of dayList" [day]="currentDay" [mealList]="mealList | delete | daypipe:currentDay.id"></day-display>
  `
})

export class DayListComponent {
  public dayList: Day[];
  public mealList: Meal[];
}
