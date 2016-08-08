import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  pipes: [DonePipe],
  template: `
    <select (change)="onDoneChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="done">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <select (change)="onPriorityChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="High" selected="selected">Show High</option>
      <option value="Medium">Show Medium</option>
      <option value="Low">Show Low</option>
    </select>
    <task-display *ngFor="#currentTask of taskList | done:filterDone:filterPriority"
      (click)="taskClicked(currentTask)"
      [class.selected]="currentTask === selectedTask"
      [task]="currentTask">
    </task-display>
    <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
    </edit-task-details><br>
    <new-task (onSubmitNewTask)="createTask($event.description, $event.priority, $event.category)"></new-task>
  `
})
export class TaskListComponent {
  public filterDone: string = "notDone";
  public filterPriority: string = "High";
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description: string, priority: string, category: string): void {
    this.taskList.push(
      new Task(description, priority, category, this.taskList.length)
    );
  }
  onDoneChange(filterOption) {
    this.filterDone = filterOption;
  }
  onPriorityChange(filterOption) {
    this.filterPriority = filterOption;
  }
}
