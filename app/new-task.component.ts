import {Component, EventEmitter } from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <select placeholder="Priority" #newPriority>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select placeholder="Category" #newCategory>
        <option>Work</option>
        <option>Hobby</option>
        <option>Home</option>
      </select>
      <button class="btn btn-lg btn-success add-button" (click)="addTask(newDescription, newPriority, newCategory)">Add</button>
    </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement, userCategory: HTMLSelectElement){
    this.onSubmitNewTask.emit({
      description: userDescription.value,
      priority: userPriority.value,
      category: userCategory.value
    });
    userDescription.value = "";
  }
}
