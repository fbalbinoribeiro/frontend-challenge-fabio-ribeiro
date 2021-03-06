import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HolidaysService } from './holidays.service';

describe('HolidaysService', () => {
  let service: HolidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(HolidaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
