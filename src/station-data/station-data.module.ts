import { Module } from '@nestjs/common';
import { StationDataService } from './station-data.service';
import { StationDataController } from './station-data.controller';
import { StationListService } from './station-list.service';
import { StationInfoService } from './station-info.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { StationConfigService } from './station-config.service';
@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [StationDataController],
  providers: [
    StationDataService,
    StationListService,
    StationInfoService,
    StationConfigService,
  ],
})
export class StationDataModule {}
