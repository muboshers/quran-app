import { TestBed } from '@angular/core/testing';

import { UserPageGuard } from './user-page.guard';

describe('UserPageGuard', () => {
  let guard: UserPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
