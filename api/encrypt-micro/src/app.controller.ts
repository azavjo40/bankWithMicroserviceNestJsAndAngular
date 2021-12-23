import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AutoCreateCryptoKeyDto } from './dto/autoCreateCryptoKey.dto';
import { DecryptionDto } from './dto/decryption.dto';
import { EncryptionDto } from './dto/encryption.dto';
import { IAutoCreateCryptoKey } from './intarface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'auto/create/crypto/key' })
  autoCreateCryptoKey(
    autoCreateCryptoKeyDto: AutoCreateCryptoKeyDto,
  ): Promise<IAutoCreateCryptoKey> {
    return this.appService.autoCreateCryptoKey(autoCreateCryptoKeyDto);
  }

  @MessagePattern({ cmd: 'decryption' })
  decryption(decryptionDto: DecryptionDto): any {
    return this.appService.decryption(decryptionDto);
  }

  @MessagePattern({ cmd: 'encryption' })
  encryption(encryptionDto: EncryptionDto): string {
    return this.appService.encryption(encryptionDto);
  }
}
