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
  
  async getAnomalie(id_anomalie: string) {
    return await this.anomalieModel.findById(id_anomalie);
  }

  async updateAnomalie(id_anomalie: string, anomalie: Object) {
    return await this.anomalieModel.findByIdAndUpdate(id_anomalie, anomalie);
  }

  async deleteAnomalie(id_anomalie: string) {
    return await this.anomalieModel.findByIdAndDelete(id_anomalie);
  }
}