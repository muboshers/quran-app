import { Component, Input } from '@angular/core';
import { faDotCircle, faMessage } from '@fortawesome/free-regular-svg-icons';
import { VerseBySurahs } from '../../types';

@Component({
  templateUrl: './ayat-card.component.html',
  styleUrls: ['./ayat-card.component.scss'],
  selector: 'app-ayat-card',
})
export class AyatCardComponent {
  faMessage = faMessage;
  faDotCircle = faDotCircle;
  isDescription: boolean = false;
  @Input() verseDetail!: VerseBySurahs;

  showDescription() {
    this.isDescription = !this.isDescription;
  }
}
