import { Component } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
@Component({
  templateUrl: './single-surah-main.component.html',
  styleUrls: ['./single-surah-main.component.scss'],
  selector: 'app-single-surah-main',
})
export class SingleSurahMainComponent {
  isTranslation: boolean = false;
  faPlayCircle = faPlayCircle;
}
