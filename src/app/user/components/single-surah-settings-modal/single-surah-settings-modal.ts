import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { userStataType } from '../../store/reducer';
import { openSingleSurahModal } from '../../store/user.action';
import { Surah } from '../../types';
@Component({
  templateUrl: './single-surah-settings-modal.component.html',
  styleUrls: ['./single-surah-settings-modal.component.scss'],
  selector: 'single-surah-settings-modal',
})
export class SingleSurahSettingsModalComponent {
  faClose = faClose;
  isJuzz = false;
  activeSurah!: Surah;
  modalCloseAction = openSingleSurahModal;
  useController!: userStataType;

  constructor(
    private store: Store<{ user: userStataType }>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.store.select('user').subscribe((result) => {
      this.useController = result;
    });
    this.route.params.subscribe((params) => {
      if (params['surahId']) {
        this.store.select('user').subscribe((result) => {
          const surah = result.surahs?.find(
            (surah) => surah.surahId == params['surahId']
          );
          if (surah) {
            this.activeSurah = surah;
          }
        });
      }
    });
  }

  handleModalClose() {
    this.store.dispatch(openSingleSurahModal());
  }

  arrayBuilder(i: number) {
    return new Array(i);
  }

  routerReplace(surahId: number) {
    this.router.navigateByUrl(`/surah/${surahId}`);
    this.store.dispatch(openSingleSurahModal());
  }
}
