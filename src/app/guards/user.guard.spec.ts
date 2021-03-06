import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserGuard } from './user.guard';

describe('UserGuard', () => {
  let guard: UserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
    });
    guard = TestBed.inject(UserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
