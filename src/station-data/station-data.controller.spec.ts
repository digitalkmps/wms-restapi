import { Test, TestingModule } from '@nestjs/testing';
import { StationDataController } from './station-data.controller';
import { StationDataService } from './station-data.service';

describe('StationDataController', () => {
  let controller: StationDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationDataController],
      providers: [StationDataService],
    }).compile();

    controller = module.get<StationDataController>(StationDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
