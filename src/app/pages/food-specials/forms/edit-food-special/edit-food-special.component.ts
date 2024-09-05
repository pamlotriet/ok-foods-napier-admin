import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { FileuploadComponent } from "../../../../shared/components/fileupload/fileupload.component";
import { AuthFacade } from "../../../../store/facade/auth.facade";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { SpecialsService } from "../../../../shared/services/specials.service";
import { SpecialsModel } from "../../../../shared/models/specials.model";
import { AzureBlobService } from "../../../../shared/services/azure-blob.service";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "app-edit-food-special",
  standalone: true,
  imports: [FileuploadComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: "./edit-food-special.component.html",
})
export class EditFoodSpecialComponent implements OnInit {
  @Input() itemId: any;
  @ViewChild("fileUpload") fileUploadComponent!: FileuploadComponent;
  imageName: string = "";
  parentForm!: FormGroup;
  formBuilder!: FormBuilder;
  authFacade = inject(AuthFacade);
  specialsService = inject(SpecialsService);
  blobService = inject(AzureBlobService);
  item!: SpecialsModel;
  imageUrl!: string;
  constructor(private _fromBuilder: FormBuilder) {
    this.formBuilder = _fromBuilder;
  }

  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.email]],
      price: ["", [Validators.required]],
      description: ["", [Validators.required]],
      imageUrl: ["", [Validators.required]],
      expiration: ["", [Validators.required]],
    });

    this.specialsService.getFoodSpecialsItemById(this.itemId).subscribe((x) => {
      this.item = x;
      this.parentForm.patchValue(this.item);
      if (this.item.imageUrl) {
        this.imageUrl = this.blobService.getImageUrl(
          this.item.imageUrl,
          environment.foodSpecialsSas,
          environment.foodSpecialsUrl
        );
        this.imageName = this.item.imageUrl;
      }
    });
  }

  onEditClick() {
    if (this.fileUploadComponent) {
      this.fileUploadComponent.uploadQueue.emit(this.parentForm);
    } else {
      console.error("FileuploadComponent is not defined.");
    }
  }
}
