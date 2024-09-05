import { Component, inject, ViewChild } from "@angular/core";
import { FileuploadComponent } from "../../../../shared/components/fileupload/fileupload.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthFacade } from "../../../../store/facade/auth.facade";

@Component({
  selector: "app-add-food-special",
  standalone: true,
  imports: [FileuploadComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: "./add-food-special.component.html",
})
export class AddFoodSpecialComponent {
  @ViewChild("fileUpload") fileUploadComponent!: FileuploadComponent;
  imageName: string = "";
  parentForm!: FormGroup;
  formBuilder!: FormBuilder;
  authFacade = inject(AuthFacade);

  constructor(private _fromBuilder: FormBuilder) {
    this.formBuilder = _fromBuilder;
  }

  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.email]],
      price: ["", [Validators.required]],
      description: ["", [Validators.required]],
      imageName: ["", [Validators.required]],
      expirationDate: ["", [Validators.required]],
    });
  }

  onUploadClick() {
    if (this.fileUploadComponent) {
      this.fileUploadComponent.uploadQueue.emit(this.parentForm);
    } else {
      console.error("FileuploadComponent is not defined.");
    }
  }
}
