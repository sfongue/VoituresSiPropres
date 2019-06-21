import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Assignation } from './interfaces/assignation.interface';
import { CreateAssignationDto } from './dto/create-assignation.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';

@Injectable()
export class AssignationsService extends MainService<Assignation, CreateAssignationDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly assignationModel: Model<Assignation>) {
		  super(assignationModel);
	}

	async getAssignation(id: string) {
		return await this.assignationModel.findById(id);
	  }
	
	  async updateAssignation(id: string, assignation: CreateAssignationDto) {
		return await this.assignationModel.findByIdAndUpdate(id, assignation);
	  }
	
	  async deleteAssignation(id: string) {
		return await this.assignationModel.findByIdAndDelete(id);
	  }
}