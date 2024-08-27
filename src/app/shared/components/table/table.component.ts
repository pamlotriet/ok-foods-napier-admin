import { CurrencyPipe } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { TableModule } from "primeng/table";
import { ButtonComponent } from "../button/button.component";
import { Guid } from "guid-typescript";
import { SpecialsFacade } from "../../../store/facade/specials.facade";

@Component({
  selector: "app-table",
  standalone: true,
  imports: [TableModule, CurrencyPipe, ButtonComponent],
  templateUrl: "./table.component.html",
})
export class TableComponent {
  @Input() items: any;
  @Input() headings: any;

  specialsFacade = inject(SpecialsFacade);

  deleteItem(id: any) {
    console.log(this.items);
    console.log("Id: ", id);
    this.specialsFacade.deleteSpecialItemById(id);
  }

  deleteAll() {
    this.specialsFacade.deleteAllFoodSpecials();
  }
}
