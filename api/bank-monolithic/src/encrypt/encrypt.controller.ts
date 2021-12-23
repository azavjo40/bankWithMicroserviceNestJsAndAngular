import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AutoCreateCryptoKeyDto } from './dto/autoCreateCryptoKey.dto';
import { DecryptionDto } from './dto/decryption.dto';
import { EncryptionDto } from './dto/encryption.dto';
import { EncryptService } from './encrypt.service';

@Controller('encrypt')
export class EncryptController {
  constructor(private encryptService: EncryptService) {}

  @Get('create/crypto/key')
  @HttpCode(HttpStatus.CREATED)
  autoCreateCryptoKey(@Body() autoCreateCryptoKeyDto: AutoCreateCryptoKeyDto) {
    return this.encryptService.autoCreateCryptoKey(autoCreateCryptoKeyDto);
  }

  @Post('decryption')
  @HttpCode(HttpStatus.OK)
  decryption(@Body() decryptionDto: DecryptionDto) {
    return this.encryptService.decryption(decryptionDto);
  }

  @Post('encryption')
  @HttpCode(HttpStatus.OK)
  encryption(@Body() encryptionDto: EncryptionDto) {
    return this.encryptService.encryption(encryptionDto);
  }
}
