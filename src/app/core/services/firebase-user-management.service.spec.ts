import { TestBed } from '@angular/core/testing';

import { FirebaseUserManagementService } from './firebase-user-management.service';

describe('FirebaseUserManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseUserManagementService = TestBed.get(FirebaseUserManagementService);
    expect(service).toBeTruthy();
  });
});
