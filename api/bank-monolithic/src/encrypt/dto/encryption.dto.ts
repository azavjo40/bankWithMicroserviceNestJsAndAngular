import { IsString } from 'class-validator';
export class EncryptionDto {
  readonly data: any;
  @IsString()
  readonly publicKey: string;
}
