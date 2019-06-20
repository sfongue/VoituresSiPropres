import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Utilisateur } from './interfaces/utilisateur.interface';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { POST_MODEL_PROVIDER } from '../constants';
import { MainService } from '../main.service';
import { UtilisateurSchema } from 'src/utilisateurs/utilisateur.schema';

@Injectable()
export class UtilisateursService extends MainService<Utilisateur, CreateUtilisateurDto> {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly utilisateurModel: Model<Utilisateur>) {
        super(utilisateurModel);
    }

}
