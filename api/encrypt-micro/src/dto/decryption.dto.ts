import { IsString } from 'class-validator';
export class DecryptionDto {
  readonly data?: any;
  @IsString()
  readonly privateKey: string;
}
