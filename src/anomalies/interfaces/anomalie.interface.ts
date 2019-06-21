import { Document } from 'mongoose';

export interface Anomalie extends Document {
  readonly id_anomalie: string;
  readonly intitule: string;
  readonly id_portique: string;
  readonly id_status: string;
  readonly created_at: string;
}