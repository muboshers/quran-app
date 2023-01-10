import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { userStataType } from '../../store/reducer';
import { changeLanguage, openSetting } from '../../store/user.action';
import { Language } from '../../types';

interface LangaugeReview extends Language {
  readonly value: 'uz' | 'kiril';
}

@Component({
  selector: 'app-setting-section',
  templateUrl: './setting-section.component.html',
  styleUrls: ['./setting-section.component.scss'],
})
export class SettingSectionComponent {
  userController!: userStataType;
  openSettingsProps = openSetting;
  authors = [
    {
      name: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    },
    {
      name: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    },
  ];
  languages?: LangaugeReview[];
  constructor(
    private store: Store<{ user: userStataType }>,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.store.select('user').subscribe((result) => {
      this.userController = result;
      if (result.language) {
        this.languages = result.language.map((language) => ({
          ...language,
          value: language.name.toLowerCase() === "o'zbek" ? 'uz' : 'kiril',
        }));
      }
    });
  }

  themeChange(theme: string) {
    if (this.document.body.classList.contains('dark-theme'))
      this.document.body.classList.remove('dark-theme');
    if (this.document.body.classList.contains('light-theme'))
      this.document.body.classList.remove('light-theme');
    this.document.body.classList.add(theme);
    this.store.dispatch(openSetting());
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  handleLanguageChange(lang: string) {
    this.store.dispatch(changeLanguage({ lang: lang }));
    localStorage.setItem('lang', JSON.stringify(lang));
  }
}
