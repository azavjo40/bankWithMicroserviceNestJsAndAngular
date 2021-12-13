import { Injectable } from '@nestjs/common';
import { Encrypt, EncryptDocument } from './schemas/encrypt.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AutoCreateCryptoKeyDto } from './dto/autoCreateCryptoKey.dto';
import { DecryptionDto } from './dto/decryption.dto';
import { EncryptionDto } from './dto/encryption.dto';
import { IAutoCreateCryptoKey } from './intarface';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Encrypt.name) private encrypt: Model<EncryptDocument>,
  ) {}
  async autoCreateCryptoKey(autoCreateCryptoKeyDto: any) {
    try {
      const { userId, clientKey, timeId } = autoCreateCryptoKeyDto;
      return 'autoCreateCryptoKeyDto';
    } catch (e) {
      console.log(e);
    }
  }

  decryption(decryptionDto: DecryptionDto) {
    try {
      return 'decryption';
    } catch (e) {
      console.log(e);
    }
  }

  encryption(encryptionDto: EncryptionDto) {
    try {
      return 'encryption';
    } catch (e) {
      console.log(e);
    }
  }
}
