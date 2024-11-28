import { Injectable } from '@nestjs/common';

@Injectable()
export class StationListService {
  stations: number[] = [22, 23, 24];

  getStationList(): number[] {
    return this.stations;
  }
}
