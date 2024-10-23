import { StationInfoEntity } from '../entities/station-info.entity';
import { StationData } from '../entities/station-data.entity';

export class StationDataWithInfoDto {
  stationId: string;
  info: StationInfoEntity;
  stationData: StationData[];
}
