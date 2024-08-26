import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() header = '';
  @Input() subHeading = '';
}
