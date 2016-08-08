import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class="task-form">
      <h3>Edit Description: </h3>
      <input [(ngModel)]="task.description" class="col-sm-8 input-lg"/>
      <select [(ngModel)]="task.priority">
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select [(ngModel)]="task.category">
        <option>Work</option>
        <option>Hobby</option>
        <option>Home</option>
      </select>
    </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
