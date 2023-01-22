import { Component } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { userStataType } from '../../store/reducer';
@Component({
  templateUrl: './single-surah-main.component.html',
  styleUrls: ['./single-surah-main.component.scss'],
  selector: 'app-single-surah-main',
})
export class SingleSurahMainComponent {
  isTranslation: boolean = false;
  faPlayCircle = faPlayCircle;
  verseIndex: number = 0;
  arabicVerse: string = '';
  userState!: userStataType;
  constructor(private store: Store<{ user: userStataType }>) {
    this.store.select('user').subscribe((result) => {
      this.userState = result;
    });
  }

  verseControl(verseType: string) {
    if (this.userState.verse) {
      if (this.verseIndex < this.userState.verse?.length - 1) {
        verseType === 'next' ? this.verseIndex++ : this.verseIndex--;
      } else this.verseIndex = this.userState.verse?.length - 1;
    }
  }
}
