import { TestBed } from '@angular/core/testing';

import { LogMessage2Service } from './log-message-2.service';

describe('LogMessage2Service', () => {
  let service: LogMessage2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogMessage2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
