import { Component, Input } from '@angular/core';
import { Surah } from '../../types';

@Component({
  selector: 'app-recently-surah-card',
  templateUrl: './recently-surah-card.component.html',
  styleUrls: ['./recently-surah-card.component.scss'],
})
export class RecentlySurahCardComponent {
  @Input() surah!: Surah;
}
