import { ObjectId } from "bson";

export class CreateTypeEvenementDto {
  readonly id_type_evenement: string;
  readonly intitule: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}