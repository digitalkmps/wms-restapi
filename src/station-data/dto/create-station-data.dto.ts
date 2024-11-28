import { StationData } from '../entities/station-data.entity';

export class CreateStationDataDto {
  readings: number;
  value: StationData[];
  wsid: string;
}
