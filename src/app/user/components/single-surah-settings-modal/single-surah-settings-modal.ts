import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { userStataType } from '../../store/reducer';
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
  useController!: userStataType;
  surahId!: number;
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
        this.surahId = params['surahId'];
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


  arrayBuilder(i: number) {
    return new Array(i);
  }

  routerReplace(surahId: number) {
    this.router.navigateByUrl(`/surah/${surahId}`);
    
  }

  verseHandler(index: number) {
    const originalHash = window.location.hash[window.location.hash.length - 1];
    return parseInt(originalHash) === index + 1 ? 'active' : '';
  }

  parentHandler(event: Event) {
    event.stopPropagation();
  }
}
