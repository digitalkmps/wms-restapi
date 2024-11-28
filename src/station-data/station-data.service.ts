import { Injectable, Logger } from '@nestjs/common';
import { StationListEntity } from './entities/station-list.entity';
import { StationData } from './entities/station-data.entity';
import { StationListService } from './station-list.service';
import {
  catchError,
  concatMap,
  delay,
  from,
  interval,
  map,
  Observable,
} from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { CreateStationDataDto } from './dto/create-station-data.dto';

@Injectable()
export class StationDataService {
  stations: number[] = this.stationListService.getStationList();
  stationList: StationListEntity = this.stations.reduce(
    (a, v) => ({
      ...a,
      [v]: [
        {
          eventTime: Date.now(),
          temperature: 0,
          humidity: 0,
          distance: 0,
          light: false,
        },
      ],
    }),
    {},
  );
  private readonly logger = new Logger(StationDataService.name);
  constructor(
    private readonly stationListService: StationListService,
    private readonly httpService: HttpService,
  ) {
    this.syncStationData();
  }

  sendGetRequest(url: string): Observable<AxiosResponse<CreateStationDataDto>> {
    return this.httpService.get<CreateStationDataDto>(url);
  }

  syncStationData() {
    interval(1000)
      .pipe(
        concatMap(() =>
          from(this.stations).pipe(
            delay(2000),
            concatMap((statiton) =>
              this.sendGetRequest(
                `http://192.168.1.50:17345/data/${statiton}`,
              ).pipe(
                map(({ data }) => data),
                catchError((error: AxiosError) => {
                  this.logger.error(error.response.data);
                  throw 'Lost connection to wms-core';
                }),
              ),
            ),
          ),
        ),
      )
      .subscribe(({ value, wsid }) => {
        if (value.length) {
          const newData: StationData = new StationData();
          newData.eventTime = value[0].eventTime;
          newData.temperature = value[0].temperature;
          newData.humidity = value[0].humidity;
          newData.distance = value[0].distance;
          newData.light = value[0].light;
          this.create(wsid, newData);
        }
      });
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
