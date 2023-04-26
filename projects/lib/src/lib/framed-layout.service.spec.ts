import { TestBed } from '@angular/core/testing';

import { FramedLayoutService } from './framed-layout.service';

describe('FramedLayoutService', () => {
  let service: FramedLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FramedLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
