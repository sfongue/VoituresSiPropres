import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatutsModule } from './statuts/statuts.module';
import { RolesModule } from './roles/roles.module';
import { AnomaliesModule } from './anomalies/anomalies.module';
import { PortiquesModule } from './portiques/portiques.module';

@Module({
  imports: [StatutsModule, RolesModule, AnomaliesModule, PortiquesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
