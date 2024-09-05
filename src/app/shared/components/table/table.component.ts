import { CurrencyPipe } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { TableModule } from "primeng/table";
import { ButtonComponent } from "../button/button.component";
import { SpecialsFacade } from "../../../store/facade/specials.facade";
import { AzureBlobService } from "../../services/azure-blob.service";
import { DialogComponent } from "../dialog/dialog.component";
import { EditFoodSpecialComponent } from "../../../pages/food-specials/forms/edit-food-special/edit-food-special.component";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [
    TableModule,
    CurrencyPipe,
    ButtonComponent,
    DialogComponent,
    EditFoodSpecialComponent,
  ],
  templateUrl: "./table.component.html",
})
export class TableComponent {
  @Input() items: any;
  @Input() headings: any;
  @Input() editType: string = "";

  specialsFacade = inject(SpecialsFacade);
  blobService = inject(AzureBlobService);
  visible = false;
  id = "";

  toggleDialog(itemId: any) {
    this.id = itemId;
    console.log("item id: ", this.id);
    this.visible = !this.visible;
  }

  deleteItem(id: any) {
    this.specialsFacade.deleteSpecialItemById(id);
  }

  getImageUrl(fileName: string) {
    return this.blobService.getImageUrl(
      fileName,
      environment.foodSpecialsSas,
      environment.foodSpecialsUrl
    );
  }

  deleteAll() {
    this.specialsFacade.deleteAllFoodSpecials();
  }
}
