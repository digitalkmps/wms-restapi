import { Injectable } from '@nestjs/common';
import { StationListEntity } from './entities/station-list.entity';
import { StationData } from './entities/station-data.entity';
import { StationListService } from './station-list.service';

@Injectable()
export class StationDataService {
  stations: string[] = this.stationListService.getStationList();
  stationList: StationListEntity = this.stations.reduce(
    (a, v) => ({
      ...a,
      [v]: [
        {
          timestamp: Date.now(),
          temperature: 0,
          humidity: 0,
          distance: 0,
          daylight: false,
        },
      ],
    }),
    {},
  );
  constructor(private readonly stationListService: StationListService) {
    console.log('this.stationList', this.stationList);
  }

  create(id: string, newData: StationData) {
    this.stationList[id].push(newData);
  }

  findAll() {
    return this.stationList;
  }

  findOne(id: string): StationData[] {
    return this.stationList[id];
  }

  remove(id: number) {
    return `This action removes a #${id} stationDatum`;
  }
}
