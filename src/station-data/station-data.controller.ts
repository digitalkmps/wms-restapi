import { Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';
import { StationDataService } from './station-data.service';
import type { Response } from 'express';
import { StationListService } from './station-list.service';
import { StationDataWithInfoDto } from './dto/station-data-info.dto';
import { StationInfoService } from './station-info.service';
import { StationData } from './entities/station-data.entity';

enum ERRORS {
  'WMS_NOT_FOUND' = 'WMS ID not found. Please, check the ID!',
}

@Controller('station-data')
export class StationDataController {
  stations: number[] = this.stationListService.getStationList();
  constructor(
    private readonly stationDataService: StationDataService,
    private readonly stationListService: StationListService,
    private readonly stationInfoService: StationInfoService,
  ) {}

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.stationDataService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    if (this.stations.includes(+id)) {
      const data: StationDataWithInfoDto = new StationDataWithInfoDto();
      data.info = this.stationInfoService.getStationInfo(id);
      data.stationId = id;
      data.stationData = this.stationDataService.findOne(id);
      res.status(HttpStatus.OK).json(data);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ error: ERRORS.WMS_NOT_FOUND });
    }
  }
  @Get('last/:id')
  findLastOne(@Param('id') id: string, @Res() res: Response) {
    if (this.stations.includes(+id)) {
      const data: StationData = new StationData();
      const lastData = this.stationDataService.findLastOne(id);
      data.eventTime = lastData.eventTime;
      data.temperature = lastData.temperature;
      data.humidity = lastData.humidity;
      data.distance = lastData.distance;
      data.light = lastData.light;
      res.status(HttpStatus.OK).json(data);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ error: ERRORS.WMS_NOT_FOUND });
    }
  }
}
