import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Anomalie } from './interfaces/anomalie.interface';
import { CreateAnomalieDto } from './dto/create-anomalie.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';

@Injectable()
export class AnomaliesService extends MainService<Anomalie, CreateAnomalieDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly anomalieModel: Model<Anomalie>) {
		super(anomalieModel);
	}
}