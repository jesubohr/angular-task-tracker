import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string = "button"
  @Input() classes: string = ""
  @Input() ariaLabel: string = "button"
  @Input() role: string = "button"
  @Input() icon: string = ""
  @Output() onClick = new EventEmitter()

  constructor() { }

  handleClick() {
    this.onClick.emit()
  }
}
