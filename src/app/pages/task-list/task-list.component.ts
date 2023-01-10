import { Component } from '@angular/core'
import type { Task } from "src/app/types/Task"
import { TaskService } from "src/app/services/task.service"

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor (private taskService: TaskService) { }

  ngOnInit (): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.setSortedTasks(tasks)
    })
  }

  setSortedTasks (tasks: Task[]): void {
    this.tasks = tasks
      .sort((a, b) => b.id! - a.id!)
      .sort((a, b) => Number(a.checked) - Number(b.checked))
  }

  addTask (task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.unshift(task)
    })
  }

  checkTask (task: Task): void {
    this.taskService.checkTask(task).subscribe(() => {
      this.setSortedTasks(this.tasks)
    })
  }

  editTask (task: Task): void {
    this.taskService.editTask(task).subscribe((task) => {
      this.tasks = this.tasks.map((t) => t.id === task.id ? task : t)
    })
  }

  deleteTask (task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    })
  }
}
