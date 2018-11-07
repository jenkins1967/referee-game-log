import { TestBed } from '@angular/core/testing';

import { FirebaseReferenceDataService } from './firebase-reference-data.service';

describe('FirebaseReferenceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseReferenceDataService = TestBed.get(FirebaseReferenceDataService);
    expect(service).toBeTruthy();
  });
});
