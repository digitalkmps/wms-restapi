import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { StationDataService } from './station-data.service';
import { CreateStationDataDto } from './dto/create-station-data.dto';
import type { Response } from 'express';
import { StationListService } from './station-list.service';
import { StationData } from './entities/station-data.entity';
import { StationDataWithInfoDto } from './dto/station-data-info.dto';
import { StationInfoService } from './station-info.service';

enum ERRORS {
  'WMS_NOT_FOUND' = 'WMS ID not found. Please, check the ID!',
}

@Controller('station-data')
export class StationDataController {
  stations: string[] = this.stationListService.getStationList();
  constructor(
    private readonly stationDataService: StationDataService,
    private readonly stationListService: StationListService,
    private readonly stationInfoService: StationInfoService,
  ) {}

  @Post()
  create(
    @Body() createStationData: CreateStationDataDto,
    @Res() res: Response,
  ) {
    const id = createStationData.stationId;
    if (this.stations.includes(id)) {
      const newData: StationData = new StationData();
      newData.timestamp = createStationData.timestamp;
      newData.temperature = createStationData.temperature;
      newData.humidity = createStationData.humidity;
      newData.distance = createStationData.distance;
      newData.daylight = createStationData.daylight;
      this.stationDataService.create(id, newData);
      res.status(HttpStatus.OK).json({ saved: true });
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ error: ERRORS.WMS_NOT_FOUND });
    }
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.stationDataService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    if (this.stations.includes(id)) {
      const data: StationDataWithInfoDto = new StationDataWithInfoDto();
      data.info = this.stationInfoService.getStationInfo(id);
      data.stationId = id;
      data.stationData = this.stationDataService.findOne(id);
      res.status(HttpStatus.OK).json(data);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ error: ERRORS.WMS_NOT_FOUND });
    }
  }
}
