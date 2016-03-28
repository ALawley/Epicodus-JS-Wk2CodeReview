import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';

@Component({
  selector: 'days-select',
  inputs: ['meal'],
  outputs: ['onSpecialtySelect'],
  template: `
    <select *ngIf="meal" (change)="onChange($event.target.value)">
      <option *ngFor="#currentDay of days" value="currentDay.id"
      [selected]="currentDay === meal.day">{{ currentDay.name }}</option>
    </select>
    <select *ngIf="!meal" (change)="onChange($event.target.value)">
      <option *ngFor="#currentDay of days" value="currentDay.id">{{ currentDay.name }}</option>
    </select>
  `
})
export class DaysSelectComponent {
  public meal: Meal;
  public days: Day[];
  public onDaySelect: EventEmitter<string>;
  constructor() {
    this.onDaySelect = new EventEmitter();
    this.days = [
      new Day("Monday", 0),
      new Day("Tuesday", 1),
      new Day("Wednesday", 2),
      new Day("Thursday", 3),
      new Day("Friday", 4),
      new Day("Saturday", 5),
      new Day("Sunday", 6),
    ]
  }
  onChange(dayOption) {
    console.log("child", dayOption);
    this.onDaySelect.emit(dayOption);
  }
}
