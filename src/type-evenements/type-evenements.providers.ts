import { Connection } from 'mongoose';

import { TypeEvenementSchema } from './type-evenements.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const typeEvenementsProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('type-evenements', TypeEvenementSchema),
    inject: [DB_PROVIDER],
  },
];
