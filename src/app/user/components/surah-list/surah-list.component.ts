import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userStataType } from '../../store/reducer';
import { UserServiceService } from '../../service/user-service.service';
import { JUZ__HANDLER } from '../../store/user.action';

@Component({
  selector: 'app-surah-list',
  templateUrl: './surah-list.component.html',
  styleUrls: ['./surah-list.component.scss'],
})
export class SurahListComponent implements OnInit {
  isSorting: boolean = false;
  isJuzz: boolean = false;
  surahId!: number;
  isActiveCard: boolean = false;
  userController!: userStataType;
  constructor(
    private store: Store<{ user: userStataType }>,
    private userService: UserServiceService
  ) {}

  @Input() cardType!: boolean;
  ngOnInit(): void {
    this.store.select('user').subscribe((result) => {
      this.userController = result;
    });
  }

  changeSorting() {
    this.isSorting = !this.isSorting;
    if (this.isJuzz) {
      if (this.isSorting) {
        // get all juzz request
        this.userService
          .getAllJuz({ value: 'string', sortDirection: 'desc' })
          .subscribe((juz) => {
            this.store.dispatch(
              JUZ__HANDLER({
                juz: juz.data,
              })
            );
          });
      } else {
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
  }

  changeSurahType(type: string) {
    if (type === 'juzz') this.isJuzz = true;
    else this.isJuzz = false;
  }

  hoverHandler(isActive: boolean) {
    this.isActiveCard = isActive;
  }
}
