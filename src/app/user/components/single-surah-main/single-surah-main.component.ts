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

  userState!: userStataType;
  constructor(private store: Store<{ user: userStataType }>) {
    this.store.select('user').subscribe((result) => {
      this.userState = result;
    });
  }
}
