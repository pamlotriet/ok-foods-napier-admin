import { Component, inject } from "@angular/core";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { SpecialsFacade } from "../../store/facade/specials.facade";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { TableComponent } from "../../shared/components/table/table.component";
import { AddFoodSpecialComponent } from "./forms/add-food-special/add-food-special.component";

@Component({
  selector: "app-food-specials",
  standalone: true,
  imports: [
    DialogComponent,
    ButtonComponent,
    TableComponent,
    AddFoodSpecialComponent,
  ],
  templateUrl: "./food-specials.component.html",
})
export class FoodSpecialsComponent {
  visible = false;
  specialsFacade = inject(SpecialsFacade);
  sFoodSpecials = this.specialsFacade.sFoodSpecials;

  foodSpecialHeadings = ["Image", "Name", "Description", "Price", "Expiration"];

  toggleDialog() {
    this.visible = !this.visible;
  }

  deleteAll() {
    this.specialsFacade.deleteAllFoodSpecials();
  }
}
