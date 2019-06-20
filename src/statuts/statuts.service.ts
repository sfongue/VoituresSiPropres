import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Statut } from './interfaces/statut.interface';
import { CreateStatutDto } from './dto/create-statut.dto';
import { POST_MODEL_PROVIDER } from '../constants';

@Injectable()
export class StatutsService {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly statutModel: Model<Statut>) { }
  
  async create(createStatutDto: CreateStatutDto): Promise<Statut> {
    const createdStatut = new this.statutModel(createStatutDto);
    return await createdStatut.save();
  }

  async findAll(): Promise<Statut[]> {
    return await this.statutModel.find().exec();
  }
}