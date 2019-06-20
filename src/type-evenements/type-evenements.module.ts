import { Module } from '@nestjs/common';
import { TypeEvenementsController } from './type-evenements.controller';
import { TypeEvenementsService } from './type-evenements.service';
import { typeEvenementsProviders } from './type-evenements.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TypeEvenementsController],
  providers: [
    TypeEvenementsService,
    ...typeEvenementsProviders,
  ],
})
export class TypeEvenementsModule {}
