import { Connection } from 'mongoose';

import { PortiqueSchema } from './portiques.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const portiquesProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('portiques', PortiqueSchema),
    inject: [DB_PROVIDER],
  },
];
