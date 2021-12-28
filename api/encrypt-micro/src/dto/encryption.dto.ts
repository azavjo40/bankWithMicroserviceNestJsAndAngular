import { IsString } from 'class-validator';
export class EncryptionDto {
  readonly data: any;
  readonly publicKey?: string;
  readonly userId?: string;
  readonly timeId?: string;
}
