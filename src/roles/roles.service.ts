import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dto/create-role.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';
import { UtilisateurSchema } from 'src/utilisateurs/utilisateur.schema';

@Injectable()
export class RolesService extends MainService<Role, CreateRoleDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly statutModel: Model<Role>) {
		super(statutModel);
	}
  
}
