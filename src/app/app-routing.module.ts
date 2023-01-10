import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TaskListComponent } from './pages/task-list/task-list.component'
import { AboutComponent } from "./pages/about/about.component"

const routes: Routes = [
  { path: "", component: TaskListComponent },
  { path: "about", component: AboutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
