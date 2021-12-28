import { IsString } from 'class-validator';
export class DecryptionDto {
  readonly data: any;
  readonly userId?: string;
  readonly timeId?: string;
}
