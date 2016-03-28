import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { DayPipe } from './day.pipe';
import { DeletePipe } from './delete.pipe';
import { DayDisplayComponent } from './day.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'day-list',
  inputs: ['dayList', 'mealList'],
  pipes: [DayPipe, DeletePipe],
  directives: [DayDisplayComponent, NewMealComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <day-display *ngFor="#currentDay of dayList" [day]="currentDay" [mealList]="mealList | delete | daypipe:currentDay.id"></day-display>
  `
})

export class DayListComponent {
  public dayList: Day[];
  public mealList: Meal[];
  createMeal(userInputArray: any[]): void {
    console.log(userInputArray);
    this.mealList.push(
      new Meal(userInputArray[0], userInputArray[1], userInputArray[2], userInputArray[3])
    );
    console.log(this.mealList);
  }
}
