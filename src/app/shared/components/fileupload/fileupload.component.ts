import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { FileUploadModule, FileSelectEvent } from "primeng/fileupload";
import { SpecialsFacade } from "../../../store/facade/specials.facade";
import { SpecialsModel } from "../../models/specials.model";
import { Guid } from "guid-typescript";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-fileupload",
  standalone: true,
  imports: [FileUploadModule],
  templateUrl: "./fileupload.component.html",
  styleUrl: "./fileupload.component.css",
})
export class FileuploadComponent {
  uploadedFile: File | undefined;
  specialsFacade = inject(SpecialsFacade);
  imageName: string = "";
  @Output() uploadQueue = new EventEmitter();
  @Input() imageUrl!: string;
  @Input() uploadedFileName!: string;
  constructor() {
    this.uploadQueue.subscribe((form) => {
      this.uploadFilesToAzure(form);
    });
  }

  onSelect(event: FileSelectEvent) {
    for (let file of event.files) {
      this.uploadedFile = file;
      this.imageName = file.name;
    }
  }

  uploadFilesToAzure(form: any) {
    if (form) {
      const product: SpecialsModel = {
        id: this.generateGuid(),
        name: form.value.name,
        description: form.value.description,
        imageUrl: this.imageName,
        price: form.value.price,
        type: "food",
        expiration: form.value.expirationDate,
      };

      if (this.uploadedFile)
        this.specialsFacade.uploadSpecialImage(
          this.uploadedFile,
          product,
          environment.foodSpecialsUrl,
          environment.foodSpecialsSas
        );
    }
  }

  private generateGuid(): Guid {
    const guid = Guid.create();
    return guid.toJSON().value;
  }
}
