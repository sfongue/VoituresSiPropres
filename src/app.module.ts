import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatutsModule } from './statuts/statuts.module';
import { RolesModule } from './roles/roles.module';
import { PortiquesModule } from './portiques/portiques.module';
import { UtilisateursController } from './utilisateurs/utilisateurs.controller';
import { TypeEvenementsController } from './type-evenements/type-evenements.controller';
import { AssignationsController } from './assignations/assignations.controller';
import { PortefeuillesController } from './portefeuilles/portefeuilles.controller';
import { AnomaliesController } from './anomalies/anomalies.controller';
import { PortiquesController } from './portiques/portiques.controller';

@Module({
  imports: [StatutsModule, RolesModule, PortiquesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
