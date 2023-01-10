import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quran-app';

  theme = localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme') || '')
    : 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    if (this.theme === '') this.theme = 'light-theme';
    this.initializeTheme();
  }

  initializeTheme = (): void => {
    this.renderer.addClass(this.document.body, this.theme);
  };
}
