import { Connection } from 'mongoose';

import { AnomalieSchema } from './anomalie.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const anomaliesProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('anomalie', AnomalieSchema),
    inject: [DB_PROVIDER],
  },
];