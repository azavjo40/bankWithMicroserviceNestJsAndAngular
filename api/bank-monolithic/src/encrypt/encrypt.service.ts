import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AutoCreateCryptoKeyDto } from './dto/autoCreateCryptoKey.dto';
import { DecryptionDto } from './dto/decryption.dto';
import { EncryptionDto } from './dto/encryption.dto';

@Injectable()
export class EncryptService {
  constructor(@Inject('ENCRYPT') private readonly client: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  async autoCreateCryptoKey(autoCreateCryptoKeyDto: AutoCreateCryptoKeyDto) {
    try {
      return this.client.send<Promise<Observable<any>>>(
        { cmd: 'auto/create/crypto/key' },
        autoCreateCryptoKeyDto,
      );
    } catch (e) {
      console.log(e);
    }
  }

  decryption(decryptionDto: DecryptionDto) {
    try {
      return this.client.send<any>({ cmd: 'decryption' }, decryptionDto);
    } catch (e) {
      console.log(e);
    }
  }

  encryption(encryptionDto: EncryptionDto) {
    try {
      return this.client.send<string>({ cmd: 'encryption' }, encryptionDto);
    } catch (e) {
      console.log(e);
    }
  }
}
