import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { UserServiceService } from '../../service/user-service.service';
import { userStataType } from '../../store/reducer';
import {
  authorChange,
  AUTHORS__HANDLER,
  changeLanguage,
  isScrollHandler,
  isSubHeader,
  LANGUAGE__HANDLER,
  openSingleSurahModal,
  JUZ__HANDLER,
  SINGLE__SURAH__HANDLER,
  SINGLE__VERSE__HANDLER,
  SURAHS__HANDLER,
} from '../../store/user.action';
import { Languages } from '../../types';

@Component({
  templateUrl: './single-surah.component.html',
  styleUrls: ['./single-surah.component.scss'],
  selector: 'app-single-surah',
})
export class SingleSurahComponent implements OnInit, OnDestroy {
  user!: userStataType;
  lang = localStorage.getItem('lang')
    ? JSON.parse(localStorage.getItem('lang') || 'kiril')
    : 'uz';
  author =
    localStorage.getItem('author') &&
    JSON.parse(localStorage.getItem('author') || 'kiril');
  constructor(
    private store: Store<{ user: userStataType }>,
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService,
    private translate: TranslateService
  ) {
    this.store.dispatch(isSubHeader({ isSubHeader: true }));
    this.store.select('user').subscribe((result) => {
      this.user = result;
    });

    this.activatedRoute.params.subscribe((params) => {
      if (params['surahId']) {
        if (this.user.selectedAuthor) {
          this.userService
            .getVerseDetail({
              langId: 2,
              authorId: this.user.selectedAuthor.id,
              surahId: params['surahId'],
            })
            .subscribe((verse) => {
              this.store.dispatch(SINGLE__VERSE__HANDLER({ verse: verse }));
            });
          this.userService
            .getSurahById(params['surahId'])
            .subscribe((result) => {
              this.store.dispatch(
                SINGLE__SURAH__HANDLER({ singleSurah: result.data })
              );
            });
        }
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(isScrollHandler({ isScroll: true }));
    this.translate.use(this.lang);
    if (!this.user.authors) {
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

      // get all authors
      this.userService.getAllAuthors('INTERPRETER').subscribe((authors) => {
        this.store.dispatch(
          authorChange({ selectedAuthor: this.author ?? authors[0] })
        );
        this.store.dispatch(AUTHORS__HANDLER({ authors }));
      });

      this.activatedRoute.params.subscribe((params) => {
        if (params['surahId']) {
          this.userService
            .getVerseDetail({
              langId: 2,
              authorId: 1,
              surahId: params['surahId'],
            })
            .subscribe((verse) => {
              this.store.dispatch(SINGLE__VERSE__HANDLER({ verse: verse }));
            });
          this.userService
            .getSurahById(params['surahId'])
            .subscribe((result) => {
              this.store.dispatch(
                SINGLE__SURAH__HANDLER({ singleSurah: result.data })
              );
            });
        }
      });
    }
  }

  modalClose() {
    if (this.user.singleSurahModal) {
      this.store.dispatch(openSingleSurahModal());
    }
  }
  ngOnDestroy(): void {
    this.store.dispatch(SINGLE__VERSE__HANDLER({ verse: undefined }));
    this.store.dispatch(SINGLE__SURAH__HANDLER({ singleSurah: undefined }));
  }
}
