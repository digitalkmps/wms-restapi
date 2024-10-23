import { Test, TestingModule } from '@nestjs/testing';
import { StationListService } from './station-list.service';

describe('StationListService', () => {
  let service: StationListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationListService],
    }).compile();

    service = module.get<StationListService>(StationListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
