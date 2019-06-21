import * as mongoose from 'mongoose';

export const AnomalieSchema = new mongoose.Schema({
  id_anomalie: String,
  intitule: String,
  id_portique: String,
  id_status: String,
  created_at: String,
});