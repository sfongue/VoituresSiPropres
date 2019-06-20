import { Document } from 'mongoose';

export interface Portefeuille extends Document {
  readonly id_portefeuille: string;
  readonly numero_carte: string;
  readonly code_pin: number;
  readonly solde: number;
}