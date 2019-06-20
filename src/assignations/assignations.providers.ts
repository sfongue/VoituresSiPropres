import { Connection } from 'mongoose';

import { AssignationSchema } from './assignation.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const assignationsProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('assignation', AssignationSchema),
    inject: [DB_PROVIDER],
  },
];