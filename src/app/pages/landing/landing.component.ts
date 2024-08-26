import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonComponent } from '../../shared/components/button/button.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardComponent, InputTextModule, PasswordModule, ButtonComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
