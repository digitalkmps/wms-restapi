import { Test, TestingModule } from '@nestjs/testing';
import { StationDataService } from './station-data.service';

describe('StationDataService', () => {
  let service: StationDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationDataService],
    }).compile();

    service = module.get<StationDataService>(StationDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
