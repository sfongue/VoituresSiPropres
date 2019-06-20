import { Module } from '@nestjs/common';
import { UtilisateursController } from './utilisateurs.controller';
import { UtilisateursService } from './utilisateurs.service';
import { utilisateursProviders } from './utilisateurs.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UtilisateursController],
  providers: [
    UtilisateursService,
    ...utilisateursProviders,
  ],
})
export class UtilisateursModule {}
