import { StationData } from '../entities/station-data.entity';

export class CreateStationDataDto extends StationData {
  stationId: string;
}
