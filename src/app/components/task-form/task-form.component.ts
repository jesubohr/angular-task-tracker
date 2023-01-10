import type { Task } from "src/app/types/Task"
import { Component, Output, EventEmitter } from '@angular/core'
import { LocalStorageService } from "src/app/services/local-storage.service"

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  text: string = ""
  date: string = ""
  @Output() onSubmit: EventEmitter<Task> = new EventEmitter()

  constructor (private localService: LocalStorageService) { }

  handleSubmit () {
    if (!this.text) {
      alert("Please add a text for the task!")
      return
    }

    const task: Task = {
      id: Date.now(),
      text: this.text,
      date: "Feb 5th at 2:30pm",
      checked: false
    }

    this.onSubmit.emit(task)
    this.text = ""
    this.date = ""
  }
}
