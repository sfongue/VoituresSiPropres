import * as mongoose from 'mongoose';
import { ObjectId } from 'bson';

export const UtilisateurSchema = new mongoose.Schema({
	id_utilisateur: String,
	nom: String,
	prenom: String,
	telephone: String,
	email: String,
	mot_de_passe: String,
	id_role: String,
	id_portefeuille: String,
	/*nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  mot_de_passe: {
    type: String,
    required: false,
  },
  id_role: {
    type: ObjectId,
    required: true,
  },
  id_portefeuille: {
    type: ObjectId,
    required: true,
  }*/
});
