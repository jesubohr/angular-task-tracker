import { Component, OnInit } from '@angular/core'
import { LocalStorageService } from "src/app/services/local-storage.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (private localService: LocalStorageService) { }

  ngOnInit (): void {
    const localTheme = this.localService.getItem('tracker.theme')
    const localThemeHue = this.localService.getItem('tracker.hue')

    if (!localTheme || !localThemeHue) this.setDefaultTheme()
  }

  setDefaultTheme (): void {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    this.localService.setItem('tracker.theme', preferredTheme)
    this.localService.setItem('tracker.hue', 270)
  }
}
