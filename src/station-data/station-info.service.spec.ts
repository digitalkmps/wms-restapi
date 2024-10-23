import { Test, TestingModule } from '@nestjs/testing';
import { StationInfoService } from './station-info.service';

describe('StationInfoService', () => {
  let service: StationInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationInfoService],
    }).compile();

    service = module.get<StationInfoService>(StationInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
