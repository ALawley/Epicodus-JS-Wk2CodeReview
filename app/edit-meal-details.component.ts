import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { DaysSelectComponent} from './days-select.component';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  outputs: ['onEndEdit'],
  directives: [DaysSelectComponent],
  template: `
    <div class="meal-form">
      <h4>Edit Meal Information</h4>
      <input [(ngModel)]="meal.name" class="input-md">
      <days-select [meal]="meal" (onDaySelect)="setDay($event)"></days-select>
      <input [(ngModel)]="meal.calories" type="number" class="input-md">
      <input [(ngModel)]="meal.details" class="input-md">
      <button (click)=endEdit() class="btn-success btn-md add-button">Done Editing</button>
      <button (click)=deleteMeal() class="btn-success btn-md add-button">Delete Meal</button>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public onEndEdit: EventEmitter<Meal>;
  constructor() {
    this.onEndEdit = new EventEmitter();
  }
  endEdit() {
    this.onEndEdit.emit(this.meal);
  }
  deleteMeal() {
    this.meal.delete = true;
    this.onEndEdit.emit(this.meal);
  }
  setDay(dayValue: string) {
    this.meal.day = parseInt(dayValue);
  }
}
