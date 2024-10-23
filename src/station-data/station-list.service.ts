import { Injectable } from '@nestjs/common';

@Injectable()
export class StationListService {
  stations: string[] = ['wms1', 'wms2', 'wms3'];

  getStationList(): string[] {
    return this.stations;
  }
}
