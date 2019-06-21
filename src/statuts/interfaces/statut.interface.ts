import { Document } from 'mongoose';

export interface Statut extends Document {
  readonly id_statut: string;
  readonly intitule: string;
}
