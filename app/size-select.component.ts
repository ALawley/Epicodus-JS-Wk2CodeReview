import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { Day } from './day.model';

@Component({
  selector: 'size-select',
  outputs: ['onSizeSelect'],
  template: `
    <select (change)="onChange($event.target.value)">
      <option selected>Show All Meals</option>
      <option>Show Large Meals</option>
      <option>Show Small Meals</option>
    </select>
  `
})
export class SizeSelectComponent {
  public onSizeSelect: EventEmitter<string>;
  constructor() {
    this.onSizeSelect = new EventEmitter();
  }
  onChange(sizeOption) {
    this.onSizeSelect.emit(sizeOption);
  }
}
