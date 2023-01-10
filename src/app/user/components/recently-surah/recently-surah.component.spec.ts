import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlySurahComponent } from './recently-surah.component';

describe('RecentlySurahComponent', () => {
  let component: RecentlySurahComponent;
  let fixture: ComponentFixture<RecentlySurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlySurahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlySurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
