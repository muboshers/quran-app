import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { userStataType } from '../../store/reducer';
import { openSingleSurahModal } from '../../store/user.action';

@Component({
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  selector: 'app-sub-header',
})
export class SubHeaderComponent {
  isScroll: boolean = true;
  constructor(private store: Store<{ user: userStataType }>) {
    this.store.select('user').subscribe((result) => {
      this.isScroll = result.isScroll;
    });
  }

  handleOpenModal() {
    this.store.dispatch(openSingleSurahModal());
  }
}
