import { Router } from '@angular/router';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { Surah } from './../../types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { UserServiceService } from '../../service/user-service.service';
import { userStataType } from '../../store/reducer';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.scss'],
})
export class SearchTermComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar') input!: ElementRef;
  faSearch = faSearch;
  userState!: userStataType;
  searchResult!: Surah[];
  isFocus: boolean = false;
  constructor(
    private userService: UserServiceService,
    private router: Router,
    private store: Store<{ user: userStataType }>
  ) {
    this.store.select('user').subscribe((result) => {
      this.userState = result;
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.input.nativeElement.addEventListener(
      'focus',
      () => (this.isFocus = true)
    );
    this.input.nativeElement.addEventListener(
      'blur',
      () => (this.isFocus = false)
    );

    fromEvent<InputEvent>(this.input.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe((event) => {
        const value = (event.target as HTMLInputElement).value;
        this.searchSurah(value);
      });
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

  routerReplace(surahId: number) {
    this.router.navigateByUrl(`/surah/${surahId}`);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.isFocus = true;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickeableEvent(event: KeyboardEvent) {
    if (this.isFocus) {
      this.isFocus = false;
    }
  }
}
