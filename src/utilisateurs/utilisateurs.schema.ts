import * as mongoose from 'mongoose';

export const UtilisateurSchema = new mongoose.Schema({
  id_utilisateur: String,
  nom: String,
  prenom: String,
  telephone: String,
  email: String,
  mot_de_passe: String,
  id_role: String,
  id_portefeuille: String,
});
