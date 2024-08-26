import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthModel } from "../models/auth.model";
import { Observable } from "rxjs";
import { AuthResponse } from "../models/auth.response";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticateUser(authModel: AuthModel): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      "http://localhost:5031/authentication/login",
      authModel
    );
  }
}
