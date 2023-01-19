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
  userState!: userStataType;
  constructor(private store: Store<{ user: userStataType }>) {
    this.store.select('user').subscribe((result) => {
      this.userState = result;
    });
  }

  handleOpenModal(event: Event) {
    event.stopPropagation();
    this.store.dispatch(openSingleSurahModal());
  }
}
