import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { TypeEvenement } from './interfaces/type-evenement.interface';
import { CreateTypeEvenementDto } from './dto/create-type-evenement.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';
import { UtilisateurSchema } from 'src/utilisateurs/utilisateur.schema';

@Injectable()
export class TypeEvenementsService extends MainService<TypeEvenement, CreateTypeEvenementDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly typeEvenementModel: Model<TypeEvenement>) {
        super(typeEvenementModel);
	}
	
	async getTypeEvenement(id: string) {
		return await this.typeEvenementModel.findById(id);
	  }
	
	  async updateTypeEvenement(id: string, typeEvenement: Object) {
		return await this.typeEvenementModel.findByIdAndUpdate(id, typeEvenement);
	  }
	
	  async deleteTypeEvenement(id: string) {
		return await this.typeEvenementModel.findByIdAndDelete(id);
	  }

}
