import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [ButtonModule],
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() text = "";
  @Input() class = "";
  @Input() icon = "";
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
