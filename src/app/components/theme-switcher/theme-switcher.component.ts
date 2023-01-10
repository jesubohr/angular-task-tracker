import { Component } from '@angular/core'
import { LocalStorageService } from "src/app/services/local-storage.service"

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent {
  isColorPicking: boolean = true
  theme: string = ""
  themeHue: string = ""

  constructor (private localService: LocalStorageService) { }

  ngOnInit () {
    this.theme = this.localService.getItem("tracker.theme")
    this.themeHue = this.localService.getItem("tracker.hue")
  }

  toggleTheme () {
    if (this.theme === "light") this.theme = "dark"
    else this.theme = "light"
    document.documentElement.setAttribute("color-scheme", this.theme)
  }

  toggleColorPicking () {
    this.isColorPicking = !this.isColorPicking
  }

  handleColorPicking (event: Event) {
    this.themeHue = (event.target as HTMLInputElement).value
    document.documentElement.style.setProperty('--_hue', this.themeHue)
  }
}
