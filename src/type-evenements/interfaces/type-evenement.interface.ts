import { Document } from 'mongoose';

export interface Role extends Document {
	readonly id_type_evenement: string;
	readonly intitule: string;
	readonly created_at: Date;
	readonly updated_at: Date;
}