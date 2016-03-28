import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';
import { DayPipe } from './day.pipe';
import { DeletePipe } from './delete.pipe';
import { SizePipe } from './size.pipe';
import { DayDisplayComponent } from './day.component';
import { NewMealComponent } from './new-meal.component';
import { SizeSelectComponent } from './size-select.component';

@Component({
  selector: 'day-list',
  inputs: ['dayList', 'mealList'],
  pipes: [DayPipe, DeletePipe, SizePipe],
  directives: [DayDisplayComponent, NewMealComponent, SizeSelectComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <size-select (onSizeSelect)="changeSize($event)"></size-select>
    <day-display *ngFor="#currentDay of dayList" [day]="currentDay" [mealList]="mealList | delete | size:filterSize | daypipe:currentDay.id"></day-display>
  `
})

export class DayListComponent {
  public filterSize: string = "Show All Meals";
  public dayList: Day[];
  public mealList: Meal[];
  createMeal(userInputArray: any[]): void {
    this.mealList.push(
      new Meal(userInputArray[0], userInputArray[1], userInputArray[2], userInputArray[3])
    );
    this.cleanup();
  }
  cleanup(): void {
    for (var i: number = 0; i < this.mealList.length; i++) {
      if (this.mealList[i].delete) {
        this.mealList.splice(i, 1);
      }
    }
  }
  changeSize(sizeInput: string): void {
    this.filterSize = sizeInput;
  }
}
