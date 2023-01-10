import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahListCardComponent } from './surah-list-card.component';

describe('SurahListCardComponent', () => {
  let component: SurahListCardComponent;
  let fixture: ComponentFixture<SurahListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurahListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurahListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
