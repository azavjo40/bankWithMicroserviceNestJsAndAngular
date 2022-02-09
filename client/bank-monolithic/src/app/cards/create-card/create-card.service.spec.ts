import { TestBed } from '@angular/core/testing';

import { CreateCardService } from './create-card.service';

describe('CreateCardService', () => {
  let service: CreateCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
