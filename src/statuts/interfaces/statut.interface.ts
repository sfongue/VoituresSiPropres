import { Document } from 'mongoose';

export interface Statut extends Document {
  readonly intitule: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}