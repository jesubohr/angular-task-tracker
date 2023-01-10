import type { Task } from "src/app/types/Task";
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onCheck: EventEmitter<Task> = new EventEmitter();
  @Output() onEdit: EventEmitter<Task> = new EventEmitter();
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }

  toggleCheck() {
    this.task.checked = !this.task.checked;
    this.onCheck.emit(this.task);
  }

  editTask() {
    this.onEdit.emit(this.task);
  }

  deleteTask() {
    this.onDelete.emit(this.task);
  }
}
