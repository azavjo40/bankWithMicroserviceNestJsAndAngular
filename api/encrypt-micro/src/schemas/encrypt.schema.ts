import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type EncryptDocument = Encrypt & Document;

@Schema()
export class Encrypt {
  @Prop()
  publicKey: string;

  @Prop()
  privateKey: string;

  @Prop()
  userId: string;
}

export const EncryptSchema = SchemaFactory.createForClass(Encrypt);
