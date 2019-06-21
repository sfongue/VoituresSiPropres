import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Portefeuille } from './interfaces/portefeuille.interface';
import { CreatePortefeuilleDto } from './dto/create-portefeuille.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';

@Injectable()
export class PortefeuillesService extends MainService<Portefeuille, CreatePortefeuilleDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly portefeuilleModel: Model<Portefeuille>) {
		  super(portefeuilleModel);
	}

	async getPortefeuille(id: string) {
		return await this.portefeuilleModel.findById(id);
	  }
	
	  async updatePortefeuille(id: string, portefeuille: Object) {
		return await this.portefeuilleModel.findByIdAndUpdate(id, portefeuille);
	  }
	
	  async deletePortefeuille(id: string) {
		return await this.portefeuilleModel.findByIdAndDelete(id);
	  }
}