import { Connection } from 'mongoose';

import { UtilisateurSchema } from './utilisateurs.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const utilisateursProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('utilisateurs', UtilisateurSchema),
    inject: [DB_PROVIDER],
  },
];
