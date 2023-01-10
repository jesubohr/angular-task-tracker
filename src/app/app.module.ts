import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { NgIconsModule } from "@ng-icons/core"
import {
  heroPlus,
  heroCheck, heroPencilSquare, heroTrash,
  heroXMark, heroMoon, heroSun, heroSwatch
} from "@ng-icons/heroicons/outline"

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ButtonComponent } from './components/button/button.component'
import { TaskItemComponent } from './components/task-item/task-item.component'
import { TaskFormComponent } from './components/task-form/task-form.component'
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component'
import { TaskListComponent } from './pages/task-list/task-list.component'
import { AboutComponent } from './pages/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TaskItemComponent,
    TaskFormComponent,
    ThemeSwitcherComponent,
    TaskListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons({
      heroPlus,
      heroCheck, heroPencilSquare, heroTrash,
      heroXMark, heroMoon, heroSun, heroSwatch
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
