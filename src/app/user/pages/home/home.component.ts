import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { UserServiceService } from '../../service/user-service.service';
import { userStataType } from '../../store/reducer';
import {
  changeLanguage,
  isSubHeader,
  JUZ__HANDLER,
  LANGUAGE__HANDLER,
  SURAHS__HANDLER,
} from '../../store/user.action';
import { Languages } from '../../types';

interface glabalState {
  user: userStataType;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lang = localStorage.getItem('lang')
    ? JSON.parse(localStorage.getItem('lang') || 'kiril')
    : 'uz';
  constructor(
    private translate: TranslateService,
    private store: Store<glabalState>,
    private userService: UserServiceService
  ) {
    this.store.select('user').subscribe((result) => {
      this.translate.use(result.lang);
    });
    this.store.dispatch(isSubHeader({ isSubHeader: false }));
  }
  ngOnInit(): void {
    if (localStorage.getItem('lang')) {
      this.store.dispatch(changeLanguage({ lang: this.lang }));
    }
    // get all language when home page loaded
    this.userService.getAllLanguage().subscribe((data: Languages) => {
      this.store.dispatch(LANGUAGE__HANDLER({ language: data.data }));
    });
    // get all surah request
    this.userService.getAllSurah().subscribe((surah) => {
      this.store.dispatch(SURAHS__HANDLER({ surahs: surah.data }));
    });
    // get all juzz request
    this.userService
      .getAllJuz({ value: 'string', sortDirection: 'asc' })
      .subscribe((juz) => {
        this.store.dispatch(
          JUZ__HANDLER({
            juz: juz.data,
          })
        );
      });
  }
}