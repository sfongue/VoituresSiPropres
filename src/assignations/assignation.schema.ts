import * as mongoose from 'mongoose';

export const AssignationSchema = new mongoose.Schema({
  id_assignation: String,
  id_utilisateur: String,
  id_portique: String,
  id_type_evenement: String,
});