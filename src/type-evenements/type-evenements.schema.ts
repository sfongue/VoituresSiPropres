import * as mongoose from 'mongoose';

export const TypeEvenementSchema = new mongoose.Schema({
  id_type_evenement: String,
  intitule: String,
  created_at: String,
  updated_at: String,
});
