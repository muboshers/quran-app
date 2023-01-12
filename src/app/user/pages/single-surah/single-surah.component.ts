import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserServiceService } from '../../service/user-service.service';
import { userStataType } from '../../store/reducer';
import { isScrollHandler, isSubHeader, SINGLE__SURAH__HANDLER } from '../../store/user.action';

@Component({
  templateUrl: './single-surah.component.html',
  styleUrls: ['./single-surah.component.scss'],
  selector: 'app-single-surah',
})
export class SingleSurahComponent implements OnInit {
  user!: userStataType;
  constructor(
    private store: Store<{ user: userStataType }>,
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceService
  ) {
    this.store.dispatch(isSubHeader({ isSubHeader: true }));
  }

  ngOnInit(): void {
    this.store.dispatch(isScrollHandler({ isScroll: true }));

    this.activatedRoute.params.subscribe((params) => {
      if (params['surahId']) {
        this.userService.getSurahById(params['surahId']).subscribe((result) => {
          this.store.dispatch(SINGLE__SURAH__HANDLER({singleSurah:result.data}))
        });
      }
    });
  }
}
