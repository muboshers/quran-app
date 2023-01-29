import { debounceTime, fromEvent, map, Observable, of } from 'rxjs';
import { Surah } from './../../types';
import { Component, ElementRef, OnInit } from '@angular/core';
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
  userState!: userStataType;
  searchInput?: ElementRef;
  search$!: Observable<string>;
  searchResult!: Surah[];
  isFocus: boolean = false;
  constructor(
    private userService: UserServiceService,
    private el: ElementRef,
    private store: Store<{ user: userStataType }>
  ) {
    this.store.select('user').subscribe((result) => {
      this.userState = result;
    });
  }

  ngOnInit(): void {
    this.searchInput = this.el.nativeElement.querySelector('#search-input');
    // if (this.searchInput) {
    //   this.search$ = fromEvent(this.searchInput, 'input').pipe(
    //     map((event: any) => event.target.value),
    //     debounceTime(500)
    //   );
    // }
  }

  searchTerm(event: Event) {
    event.preventDefault();
  }
  searchSurah(searchTerm: string) {
    const timeHandler = setTimeout(() => {
      this.userService
        .getAllSurahByFilter({
          value: searchTerm,
          sortDirection: 'asc',
        })
        .subscribe({
          next: (result) => {
            this.searchResult = result.data;
          },
          error(err) {
            console.warn(err.message);
          },
        });
    }, 500);
  }
}
