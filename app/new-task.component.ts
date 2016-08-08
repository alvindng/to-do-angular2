import {Component, EventEmitter } from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <label for="new-priority">Priority: </label>
      <select placeholder="Priority" #newPriority id="new-priority">
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <label for="new-category">Category: </label>
      <select placeholder="Category" #newCategory id="new-category">
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
