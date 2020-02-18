import { TestBed } from '@angular/core/testing';

import { AdminPostService } from './admin-post.service';

describe('AdminPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPostService = TestBed.get(AdminPostService);
    expect(service).toBeTruthy();
  });
});
