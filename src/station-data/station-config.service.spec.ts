import { Test, TestingModule } from '@nestjs/testing';
import { StationConfigService } from './station-config.service';

describe('StationConfigService', () => {
  let service: StationConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationConfigService],
    }).compile();

    service = module.get<StationConfigService>(StationConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
