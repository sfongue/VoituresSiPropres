import { Module } from '@nestjs/common';
import { AssignationsController } from './assignations.controller';
import { AssignationsService } from './assignations.service';
import { assignationsProviders } from './assignations.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssignationsController],
  providers: [
    AssignationsService, 
    ...assignationsProviders
  ],
})
export class AssignationsModule {}