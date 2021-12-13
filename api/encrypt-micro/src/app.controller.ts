import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { DecryptionDto } from './dto/decryption.dto';
import { EncryptionDto } from './dto/encryption.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'auto/create/crypto/key' })
  autoCreateCryptoKey(autoCreateCryptoKeyDto: any) {
    return this.appService.autoCreateCryptoKey(autoCreateCryptoKeyDto);
  }

  @MessagePattern({ cmd: 'decryption' })
  decryption(decryptionDto: any) {
    return this.appService.decryption(decryptionDto);
  }

  @MessagePattern({ cmd: 'encryption' })
  encryption(encryptionDto: any) {
    return this.appService.encryption(encryptionDto);
  }
}
