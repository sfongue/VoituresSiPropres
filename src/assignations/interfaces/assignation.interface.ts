import { Document } from 'mongoose';

export interface Assignation extends Document {
  readonly id_assignation: string;
  readonly id_utilisateur: string;
  readonly id_portique: string;
  readonly id_type_evenement: string;
}