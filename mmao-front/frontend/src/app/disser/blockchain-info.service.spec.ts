import { TestBed } from '@angular/core/testing';

import { BlockchainInfoService } from './blockchain-info.service';

describe('BlockchainInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainInfoService = TestBed.get(BlockchainInfoService);
    expect(service).toBeTruthy();
  });
});
