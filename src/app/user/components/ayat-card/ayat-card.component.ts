import { Component } from '@angular/core';
import { faDotCircle, faMessage } from '@fortawesome/free-regular-svg-icons';

@Component({
  templateUrl: './ayat-card.component.html',
  styleUrls: ['./ayat-card.component.scss'],
  selector: 'app-ayat-card',
})
export class AyatCardComponent {
  faMessage = faMessage;
  faDotCircle = faDotCircle;
}
