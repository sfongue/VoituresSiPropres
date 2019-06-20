import * as mongoose from 'mongoose';

export const StatutSchema = new mongoose.Schema({
  intitule: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
  updated_at: {
    type: Date,
    required: false,
  }
});