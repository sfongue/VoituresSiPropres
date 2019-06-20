import * as mongoose from 'mongoose';

export const PortefeuilleSchema = new mongoose.Schema({
  id_portefeuille: String,
  numero_carte: String,
  code_pin: Number,
  solde: Number,
});