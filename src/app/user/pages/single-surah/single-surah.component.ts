import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userStataType } from '../../store/reducer';
import { isScrollHandler, isSubHeader } from '../../store/user.action';

@Component({
  templateUrl: './single-surah.component.html',
  styleUrls: ['./single-surah.component.scss'],
  selector: 'app-single-surah',
})
export class SingleSurahComponent implements OnInit {
  user!: userStataType;
  constructor(private store: Store<{ user: userStataType }>) {
    this.store.dispatch(isSubHeader({ isSubHeader: true }));
  }

  ngOnInit(): void {
    this.store.dispatch(isScrollHandler({ isScroll: true }));
  }
}
