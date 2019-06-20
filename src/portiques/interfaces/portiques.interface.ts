import { Document } from 'mongoose';

export interface Portique extends Document {
    readonly id_portique: string;
    readonly type_portique: string;
    readonly emplacement: string;
}
