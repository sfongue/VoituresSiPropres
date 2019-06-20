import { ObjectId } from "bson";
import { Document } from 'mongoose';


export class CreateUtilisateurDto extends Document {
  readonly nom: string;
  readonly prenom: string;
  readonly telephone: string;
  readonly email: string;
  readonly mot_de_passe: string;
  readonly id_role: ObjectId;
  readonly id_portefeuille: ObjectId;
}