import { AfterContentInit, Component, inject, OnInit } from "@angular/core";
import { CardComponent } from "../../shared/components/card/card.component";
import { Tabs } from "../../shared/models/tab.interface";
import { CommonModule } from "@angular/common";
import { TableComponent } from "../../shared/components/table/table.component";
import { SpecialsFacade } from "../../store/facade/specials.facade";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { DialogComponent } from "../../shared/components/dialog/dialog.component";
import { FoodSpecialsComponent } from "../food-specials/food-specials.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    TableComponent,
    ButtonComponent,
    DialogComponent,
    FoodSpecialsComponent,
  ],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements AfterContentInit, OnInit {
  selectedTabIndex = 0;
  specialsFacade = inject(SpecialsFacade);
  sFoodSpecials = this.specialsFacade.sFoodSpecials;

  tabs: Tabs[] = [
    { title: "Food Specials", icon: "pi pi-shop", active: false },
    { title: "Liquor Specials", icon: "pi pi-warehouse", active: false },
    { title: "Staff", icon: "pi pi-send", active: false },
    { title: "Update Contact Info", icon: "pi pi-address-book", active: false },
    { title: "Post Update", icon: "pi pi-user", active: false },
  ];

  ngOnInit(): void {
    this.specialsFacade.getFoodSpecials();
    if (this.sFoodSpecials()) console.log(this.sFoodSpecials());
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }
}
