import { Module } from '@nestjs/common';
import { StationDataService } from './station-data.service';
import { StationDataController } from './station-data.controller';
import { StationListService } from './station-list.service';
import { StationInfoService } from './station-info.service';

@Module({
  controllers: [StationDataController],
  providers: [StationDataService, StationListService, StationInfoService],
})
export class StationDataModule {}
