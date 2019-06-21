import { Document } from 'mongoose';

export interface Role extends Document {
  readonly intitule: string;
  readonly created_at: string;
}