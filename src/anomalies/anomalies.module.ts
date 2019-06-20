import { Module } from '@nestjs/common';
import { AnomaliesController } from './anomalies.controller';
import { AnomaliesService } from './anomalies.service';
import { anomaliesProviders } from './anomalies.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AnomaliesController],
  providers: [
    AnomaliesService, 
    ...anomaliesProviders
  ],
})
export class AnomaliesModule {}