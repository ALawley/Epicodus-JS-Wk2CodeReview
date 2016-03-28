import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { DaysSelectComponent} from './days-select.component';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  directives: [DaysSelectComponent],
  template: `
    <div class="meal-form">
      <h4>Add a Meal:</h4>
      <form (submit)="addMeal(newName, newCalories, newDetails)">
        <input required placeholder="name" class="input-lg" #newName>
        <days-select (onDaySelect)="setDay($event)"></days-select>
        <input required placeholder="calories" type="number" class="input-lg" #newCalories>
        <input required placeholder="details" class="input-lg" #newDetails>
        <button type="submit" class="btn-success btn-lg add-button">Add</button>
      </form>
    </div>
  `
})

export class NewMealComponent {
  public newMealDay: number = 0;
  public onSubmitNewMeal: EventEmitter<any[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newCalories: HTMLInputElement, newDetails: HTMLInputElement){
    var newMealInputs: any[] = [];
    newMealInputs.push(newName.value);
    newMealInputs.push(parseInt(newCalories.value));
    newMealInputs.push(newDetails.value);
    newMealInputs.push(this.newMealDay);
    this.onSubmitNewMeal.emit(newMealInputs);
  }
  setDay(dayValue: string) {
    this.newMealDay = parseInt(dayValue);
  }
}
