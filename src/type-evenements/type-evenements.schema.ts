import * as mongoose from 'mongoose';

export const TypeEvenementSchema = new mongoose.Schema({
  id_type_evenement: String,
  type_type_evenement: String,
  emplacement: String,
});
