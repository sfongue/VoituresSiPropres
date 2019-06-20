import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatutsModule } from './statuts/statuts.module';
// import { RolesModule } from './roles/roles.module';

@Module({
  // imports: [StatutsModule, DatabaseModule, RolesModule],
  imports: [StatutsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
