import * as mongoose from 'mongoose';

export const PortiqueSchema = new mongoose.Schema({
  id_portique: String,
  type_portique: String,
  emplacement: String,
});
