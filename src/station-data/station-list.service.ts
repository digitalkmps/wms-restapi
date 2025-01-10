import { Injectable } from '@nestjs/common';

@Injectable()
export class StationListService {
  stations: number[] = [22, 23, 24, 25, 26];

  getStationList(): number[] {
    return this.stations;
  }
}
