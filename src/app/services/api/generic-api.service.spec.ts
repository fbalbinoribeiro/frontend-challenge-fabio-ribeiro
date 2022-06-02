import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GenericApiService } from './generic-api.service';

describe('GenericApiService', () => {
  let service: GenericApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(GenericApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
