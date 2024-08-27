import { Component, inject, OnInit } from "@angular/core";
import { CardComponent } from "../../shared/components/card/card.component";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonComponent } from "../../shared/components/button/button.component";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthFacade } from "../../store/facade/auth.facade";
@Component({
  selector: "app-landing",
  standalone: true,
  imports: [
    CardComponent,
    InputTextModule,
    PasswordModule,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
  parentForm!: FormGroup;
  formBuilder!: FormBuilder;

  authFacade = inject(AuthFacade);

  constructor(private _fromBuilder: FormBuilder) {
    this.formBuilder = _fromBuilder;
  }

  ngOnInit(): void {
    this.parentForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  click() {
    this.authFacade.authenticateUser(this.parentForm.value);
  }
}
