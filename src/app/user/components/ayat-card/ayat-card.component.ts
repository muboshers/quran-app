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
  className: boolean = document.body.classList.contains('quran-font');
  @Input() verseDetail!: VerseBySurahs;
}
