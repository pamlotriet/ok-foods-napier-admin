import { Component, EventEmitter, Input, Output } from "@angular/core";
import { DialogModule } from "primeng/dialog";
@Component({
  selector: "app-dialog",
  standalone: true,
  imports: [DialogModule],
  templateUrl: "./dialog.component.html",
})
export class DialogComponent {
  @Input()
  visible!: boolean;
  @Output() visibleEmitter = new EventEmitter<string>();

  toggleVisible() {
    this.visible = false;
    console.log(this, this.visible);
    this.visibleEmitter.emit();
  }
}
