import { Injectable } from '@nestjs/common';
import { StationInfoEntity } from './entities/station-info.entity';

@Injectable()
export class StationInfoService {
  stationInfo: { [key: string]: StationInfoEntity } = {
    wms1: {
      latitude: 42.14492,
      longitude: 24.75032,
      description: 'Station for water level monitoring',
    },
    wms2: {
      latitude: 42.14492,
      longitude: 24.75032,
      description: 'Station for water level monitoring',
    },
    wms3: {
      latitude: 42.14492,
      longitude: 24.75032,
      description: 'Station for water level monitoring',
    },
  };

  getStationInfo(id: string): StationInfoEntity {
    return this.stationInfo[id];
  }
}
