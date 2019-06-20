import { Module } from '@nestjs/common';
import { PortiquesController } from './portiques.controller';
import { PortiquesService } from './portiques.service';
import { portiquesProviders } from './portiques.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PortiquesController],
  providers: [
    PortiquesService,
    ...portiquesProviders,
  ],
})
export class PortiquesModule {}
