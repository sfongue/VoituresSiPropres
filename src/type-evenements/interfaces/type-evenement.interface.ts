import { Document } from 'mongoose';

export interface TypeEvenement extends Document {
	readonly id_type_evenement: string;
	readonly intitule: string;
	readonly created_at: string;
	readonly updated_at: string;
}