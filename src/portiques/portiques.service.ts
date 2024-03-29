import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Portique } from './interfaces/portiques.interface';
import { CreatePortiqueDto } from './dto/create-portique.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';
import { UtilisateurSchema } from 'src/utilisateurs/utilisateur.schema';

@Injectable()
export class PortiquesService extends MainService<Portique, CreatePortiqueDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly portiqueModel: Model<Portique>) {
        super(portiqueModel);
    }

	async getPortique(id: string) {
		return await this.portiqueModel.findById(id);
	  }
	
	  async updatePortique(id: string, portique: CreatePortiqueDto) {
		return await this.portiqueModel.findByIdAndUpdate(id, portique);
	  }
	
	  async deletePortique(id: string) {
		return await this.portiqueModel.findByIdAndDelete(id);
	  }
}
