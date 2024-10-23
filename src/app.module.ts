import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StationDataModule } from './station-data/station-data.module';

@Module({
  imports: [StationDataModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
