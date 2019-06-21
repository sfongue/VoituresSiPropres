import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Statut } from './interfaces/statut.interface';
import { CreateStatutDto } from './dto/create-statut.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';

@Injectable()
export class StatutsService extends MainService<Statut, CreateStatutDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly statutModel: Model<Statut>) {
		super(statutModel);
	}
  
	async getStatut(id: string) {
		return await this.statutModel.findById(id);
	  }
	
	  async updateStatut(id: string, statut: Object) {
		return await this.statutModel.findByIdAndUpdate(id, statut);
	  }
	
	  async deleteStatut(id: string) {
		return await this.statutModel.findByIdAndDelete(id);
	  }
}