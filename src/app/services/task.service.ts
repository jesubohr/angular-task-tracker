import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import type { Task } from "src/app/types/Task"

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private API_URL = "http://localhost:5000/tasks"

  constructor (private client: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.client.get<Task[]>(this.API_URL)
  }

  addTask (task: Task) {
    return this.client.post<Task>(this.API_URL, task, HTTP_OPTIONS)
  }

  checkTask (task: Task): Observable<Task> {
    const url = `${this.API_URL}/${task.id}`
    return this.client.put<Task>(url, task, HTTP_OPTIONS)
  }

  editTask (task: Task): Observable<Task> {
    const url = `${this.API_URL}/${task.id}`
    return this.client.put<Task>(url, task, HTTP_OPTIONS)
  }

  deleteTask (task: Task): Observable<Task> {
    const url = `${this.API_URL}/${task.id}`
    return this.client.delete<Task>(url)
  }
}
