import { Pipe, PipeTransform } from 'angular2/core';
import { Task } from './task.model';

@Pipe({
  name: "done",
  pure: false
})
export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredDoneState = args[0];
    var priorityFilter = args[1];
    if(desiredDoneState === "done") {
      return input.filter((task) => {
        if (priorityFilter === "High") {
          return task.done && task.priority === "High";
        } else if (priorityFilter === "Medium") {
          return task.done && task.priority === "Medium"
        } else if (priorityFilter === "Low") {
          return task.done && task.priority === "Low"
        } else {
          return task.done;
        }
      });
    } else if (desiredDoneState === "notDone") {
      return input.filter((task) => {
        if (priorityFilter === "High") {
          return !task.done && task.priority === "High";
        } else if (priorityFilter === "Medium") {
          return !task.done && task.priority === "Medium"
        } else if (priorityFilter === "Low") {
          return !task.done && task.priority === "Low"
        } else {
          return !task.done;
        }
      });
    } else {
      return input.filter((task) => {
        if (priorityFilter === "High") {
          return task.priority === "High";
        } else if (priorityFilter === "Medium") {
          return task.priority === "Medium"
        } else if (priorityFilter === "Low") {
          return task.priority === "Low"
        } else {
          return input;
        }
      });
    }
  }
}
