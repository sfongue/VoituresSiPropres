import * as mongoose from 'mongoose';

export const StatutSchema = new mongoose.Schema({
  id_statut: {
    type: String,
    required: true,
  },
  intitule: {
    type: String,
    required: true,
  }
});