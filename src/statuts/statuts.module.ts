import { Module } from '@nestjs/common';
import { StatutsController } from './statuts.controller';
import { StatutsService } from './statuts.service';
import { statutsProviders } from './statuts.providers';
import { DatabaseModule } from '../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StatutSchema } from './statut.schema';

@Module({
  imports: [DatabaseModule],
  // imports: [MongooseModule.forFeature([{ name: 'Statut', schema: StatutSchema }])],
  controllers: [StatutsController],
  providers: [
    StatutsService,
    ...statutsProviders,
  ],
})
export class StatutsModule {}


