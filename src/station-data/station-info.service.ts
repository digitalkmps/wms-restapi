import { Injectable } from '@nestjs/common';
import { StationInfoEntity } from './entities/station-info.entity';

@Injectable()
export class StationInfoService {
  stationInfo: { [key: string]: StationInfoEntity } = {
    22: {
      latitude: 42.14492,
      longitude: 24.75032,
      description: 'Station for water level monitoring',
    },
    23: {
      latitude: 42.14492,
      longitude: 24.75032,
      description: 'Station for water level monitoring',
    },
    24: {
      latitude: 42.14492,
      longitude: 24.75032,
      description: 'Station for water level monitoring',
    },
  };

  getStationInfo(id: string): StationInfoEntity {
    return this.stationInfo[id];
  }
}
