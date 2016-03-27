import { Component } from 'angular2/core';
import { Day } from './day.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      >day-list [dayList]="days"></day-list>
    </div>
  `
})

export class AppComponent {
  public days: Day[];
  constructor() {
    new Day("Monday")
    new Day("Tuesday")
    new Day("Wednesday")
    new Day("Thursday")
    new Day("Friday")
    new Day("Saturday")
    new Day("Sunday")
  }
}
