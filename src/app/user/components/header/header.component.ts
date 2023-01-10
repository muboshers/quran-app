import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faUserFriends,
  faGears,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  isScrollHandler,
  openCategory,
  openSetting,
} from '../../store/user.action';
import { userStataType } from '../../store/reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faUserFriends = faUserFriends;
  faGear = faGears;
  userController!: userStataType;
  prevScrollpos: number = window.pageYOffset;
  topPosition!: number;
  constructor(private store: Store<{ user: userStataType }>) {
    this.store.select('user').subscribe((result) => {
      this.userController = result;
    });
  }
  ngOnInit(): void {
    this.scrollToggler();
  }

  scrollToggler() {
    window.addEventListener('scroll', () => {
      const currentScrollpos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollpos)
        this.store.dispatch(isScrollHandler({ isScroll: true }));
      else this.store.dispatch(isScrollHandler({ isScroll: false }));
      this.prevScrollpos = currentScrollpos;
    });
  }

  handleOpenSettings() {
    this.store.dispatch(openSetting());
  }

  handleOpenCategories() {
    this.store.dispatch(openCategory());
  }
}
