import { Connection } from 'mongoose';

import { StatutSchema } from './statut.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const statutsProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('statuts', StatutSchema),
    inject: [DB_PROVIDER],
  },
];