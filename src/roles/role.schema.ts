import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
  intitule: String,
  created_at: String,
});