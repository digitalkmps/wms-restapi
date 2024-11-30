import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StationConfigService {
  private wmsCoreIP = this.configService.get<string>('WMS_CORE_IP');
  private wmsCorePort = this.configService.get<string>('WMS_CORE_PORT');

  constructor(private readonly configService: ConfigService) {}

  getWMSCoreUrl(stationId: number): string {
    return `http://${this.wmsCoreIP}:${this.wmsCorePort}/data/${stationId}`;
  }
}
