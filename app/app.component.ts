import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app", "High", "Work", 0),
      new Task("Learn Kung Fu", "Medium", "Hobby", 1),
      new Task("Rewatch all the Lord of the Rings movies", "Medium", "Home", 2),
      new Task("Do the laundry", "Low", "Home", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
