import { Component } from '@angular/core';

@Component({
  selector: 'app-recently-surah',
  templateUrl: './recently-surah.component.html',
  styleUrls: ['./recently-surah.component.scss'],
})
export class RecentlySurahComponent {
  isRecently: boolean = false;
  recentlySurah = localStorage.getItem('recently-read')
    ? JSON.parse(localStorage.getItem('recently-read') || '')
    : '';

  constructor() {}
}
