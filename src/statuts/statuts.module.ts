import { Module } from '@nestjs/common';
import { StatutsController } from './statuts.controller';
import { StatutsService } from './statuts.service';
import { statutsProviders } from './statuts.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StatutsController],
  providers: [
    StatutsService,
    ...statutsProviders,
  ],
})
export class StatutsModule {}


