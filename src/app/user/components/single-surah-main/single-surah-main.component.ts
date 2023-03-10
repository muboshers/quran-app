import { Component, Input, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { Store } from '@ngrx/store';
import { userStataType } from '../../store/reducer';
import { VerseBySurahs } from '../../types';
@Component({
  templateUrl: './single-surah-main.component.html',
  styleUrls: ['./single-surah-main.component.scss'],
  selector: 'app-single-surah-main',
})
export class SingleSurahMainComponent implements OnInit {
  @Input() paramsId!: number;
  isTranslation: boolean = false;
  faPlayCircle = faPlayCircle;
  pageNumber: number = 1;
  verseIndex: number = 0;
  arabicVerse: string = '';
  userState!: userStataType;
  verseClone!: VerseBySurahs[];
  pageAbleVerse!: VerseBySurahs[];
  constructor(private store: Store<{ user: userStataType }>) {
    this.store.select('user').subscribe((result) => {
      this.userState = result;
    });
  }
  ngOnInit(): void {}
  verseControl(verseType: string) {
    if (this.userState.verse) {
      if (this.verseIndex < this.userState.verse?.length - 1) {
        verseType === 'next' ? this.verseIndex++ : this.verseIndex--;
      } else this.verseIndex = this.userState.verse?.length - 1;
    }
  }

  arabicNumber(num: number) {
    const arabicNumerals = [
      '\u0660',
      '\u0661',
      '\u0662',
      '\u0663',
      '\u0664',
      '\u0665',
      '\u0666',
      '\u0667',
      '\u0668',
      '\u0669',
    ];
    let str = '';
    while (num > 0) {
      str = arabicNumerals[num % 10] + str;
      num = Math.floor(num / 10);
    }
    return str;
  }
}
