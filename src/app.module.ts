import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StationDataModule } from './station-data/station-data.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), StationDataModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
