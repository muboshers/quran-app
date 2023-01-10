import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.scss'],
})
export class SearchTermComponent {
  faSearch = faSearch;
}
