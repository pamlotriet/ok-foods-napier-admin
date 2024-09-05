import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthModel } from "../models/auth.model";
import { Observable } from "rxjs";
import { AuthResponse } from "../models/auth.response";
import { SpecialsModel } from "../models/specials.model";
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: "root",
})
export class SpecialsService {
  constructor(private http: HttpClient) {}

  getFoodSpecials(): Observable<SpecialsModel[]> {
    return this.http.get<SpecialsModel[]>(
      "http://localhost:5031/specials/food"
    );
  }

  deleteFoodSpecialsItem(id: Guid) {
    const url = `http://localhost:5031/specials/delete/${id}`;

    return this.http.request("delete", url);
  }

  getFoodSpecialsItemById(id: Guid) {
    return this.http.get<SpecialsModel>(`http://localhost:5031/specials/${id}`);
  }

  deleteAllFoodSpecials() {
    return this.http.delete("http://localhost:5031/specials/delete-all/food");
  }

  uploadProduct(product: SpecialsModel): Observable<SpecialsModel> {
    return this.http.post<SpecialsModel>(
      "http://localhost:5031/specials",
      product
    );
  }
}
