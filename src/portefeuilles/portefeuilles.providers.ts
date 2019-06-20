import { Connection } from 'mongoose';

import { PortefeuilleSchema } from './portefeuille.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const portefeuillesProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('portefeuille', PortefeuilleSchema),
    inject: [DB_PROVIDER],
  },
];