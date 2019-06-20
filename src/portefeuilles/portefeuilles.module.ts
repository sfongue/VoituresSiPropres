import { Module } from '@nestjs/common';
import { PortefeuillesController } from './portefeuilles.controller';
import { PortefeuillesService } from './portefeuilles.service';
import { portefeuillesProviders } from './portefeuilles.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PortefeuillesController],
  providers: [
    PortefeuillesService, 
    ...portefeuillesProviders
  ],
})
export class PortefeuillesModule {}