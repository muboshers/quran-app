import { Component, Input } from '@angular/core';
import { Juz, Surah } from '../../types';

@Component({
  selector: 'app-surah-list-card',
  templateUrl: './surah-list-card.component.html',
  styleUrls: ['./surah-list-card.component.scss'],
})
export class SurahListCardComponent {
  @Input() cardInfo!: Surah;
  @Input() juz!: Juz;
  recentlyRead: Surah[] = [];
  constructor() {
    if (localStorage.getItem('recently-read')) {
      this.recentlyRead = JSON.parse(
        localStorage.getItem('recently-read') || ''
      );
    }
  }

  mouseHandler(event: Event) {
    if (event.target instanceof Element) {
      const parentEl = event.target.parentElement;
      if (event.target.classList.contains('surah')) {
        parentEl?.classList.add('active-border');
      }
    }
  }

  mouseDestroyHandler(event: Event) {
    if (event.target instanceof Element) {
      const parentEl = event.target.parentElement;
      parentEl?.classList.remove('active-border');
    }
  }

  reventlyHandler(surah: Surah) {
    const idx = this.recentlyRead.findIndex(
      (recently) => recently.surahId === surah.surahId
    );
    if (!this.recentlyRead[idx]) {
      this.recentlyRead = [...this.recentlyRead, surah];
      localStorage.setItem('recently-read', JSON.stringify(this.recentlyRead));
    }
  }
}
