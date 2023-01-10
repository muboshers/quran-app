import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlySurahCardComponent } from './recently-surah-card.component';

describe('RecentlySurahCardComponent', () => {
  let component: RecentlySurahCardComponent;
  let fixture: ComponentFixture<RecentlySurahCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlySurahCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlySurahCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
