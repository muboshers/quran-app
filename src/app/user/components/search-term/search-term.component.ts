import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { UserServiceService } from '../../service/user-service.service';
import { userStataType } from '../../store/reducer';
import { JUZ__HANDLER, SURAHS__HANDLER } from '../../store/user.action';
@Component({
  selector: 'app-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.scss'],
})
export class SearchTermComponent implements OnInit {
  faSearch = faSearch;
  searchFbGroup!: FormGroup;
  userState!: userStataType;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private store: Store<{ user: userStataType }>
  ) {
    this.store.select('user').subscribe((result) => {
      this.userState = result;
    });
  }

  ngOnInit(): void {
    this.searchFbGroup = this.formBuilder.group({
      searchTerm: ['', Validators.required],
    });
  }

  searchTerm(event: Event) {
    event.preventDefault();
    if (this.searchFbGroup.valid) {
      if (this.userState.isSurah) {
        this.userService
          .getAllJuz({
            value: this.searchFbGroup.value['searchTerm'],
            sortDirection: 'asc',
          })
          .subscribe((result) => {
            this.store.dispatch(JUZ__HANDLER({ juz: result.data }));
          });
      } else {
        this.userService
          .getAllSurahByFilter({
            value: this.searchFbGroup.value['searchTerm'],
            sortDirection: 'asc',
          })
          .subscribe((result) => {
            this.store.dispatch(SURAHS__HANDLER({ surahs: result.data }));
          });
      }
    } else {
      if (this.userState.isSurah) {
        this.userService
          .getAllJuz({
            value: '',
            sortDirection: 'asc',
          })
          .subscribe((result) => {
            this.store.dispatch(JUZ__HANDLER({ juz: result.data }));
          });
      } else {
        this.userService
          .getAllSurahByFilter({
            value: '',
            sortDirection: 'asc',
          })
          .subscribe((result) => {
            this.store.dispatch(SURAHS__HANDLER({ surahs: result.data }));
          });
      }
    }
    this.searchFbGroup.controls['searchTerm'].setValue('');
  }
}
