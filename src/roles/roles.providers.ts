import { Connection } from 'mongoose';

import { RoleSchema } from './role.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const rolesProviders = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('roles', RoleSchema),
    inject: [DB_PROVIDER],
  },
];