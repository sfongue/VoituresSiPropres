import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Anomalie } from './interfaces/anomalie.interface';
import { CreateAnomalieDto } from './dto/create-anomalie.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';
import { identity } from 'rxjs';

@Injectable()
export class AnomaliesService extends MainService<Anomalie, CreateAnomalieDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly anomalieModel: Model<Anomalie>) {
		super(anomalieModel);
  }
  
  async getAnomalie(id_anomalie: number) {
    return await this.anomalieModel.findById(id_anomalie);
  }

  async updateAnomalie(id_anomalie: number, anomalie: Object) {
    return await this.anomalieModel.update(id_anomalie, anomalie);
  }

  async deleteAnomalie(id_anomalie: number) {
    return await this.anomalieModel.deleteOne(id_anomalie);
  }
}