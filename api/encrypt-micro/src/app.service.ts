import { Injectable } from '@nestjs/common';
import { Encrypt, EncryptDocument } from './schemas/encrypt.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AutoCreateCryptoKeyDto } from './dto/autoCreateCryptoKey.dto';
import { DecryptionDto } from './dto/decryption.dto';
import { EncryptionDto } from './dto/encryption.dto';
import { IAutoCreateCryptoKey } from './intarface';
import * as NodeRSA from 'node-rsa';
@Injectable()
export class AppService {
  constructor(
    @InjectModel(Encrypt.name) private encrypt: Model<EncryptDocument>,
  ) {}

  async autoCreateCryptoKey(
    autoCreateCryptoKeyDto: AutoCreateCryptoKeyDto,
  ): Promise<IAutoCreateCryptoKey> {
    try {
      const { userId } = autoCreateCryptoKeyDto;
      const timeId = Date.now().toString();
      const newKey = new NodeRSA({ b: 1024 });
      const publicKey = newKey.exportKey('public');
      const privateKey = newKey.exportKey('private');
      const encryptKeys = await new this.encrypt({
        publicKey,
        privateKey,
        userId: userId ? userId : timeId,
      });
      if (!userId) {
        setTimeout(async () => {
          try {
            await this.encrypt.deleteOne({ userId: timeId });
          } catch (e) {
            console.log(e);
          }
        }, 9000);
      }
      return { publicKey, privateKey };
    } catch (e) {
      console.log(e);
    }
  }

  decryption(decryptionDto: DecryptionDto): any {
    try {
      const { privateKey, data } = decryptionDto;
      const decrypte = new NodeRSA(privateKey);
      const decryptData = decrypte.decrypt(data, 'utf8');
      const decryptDataToParse: any = JSON.parse(decryptData);
      return decryptDataToParse;
    } catch (e) {
      console.log(e);
    }
  }

  encryption(encryptionDto: EncryptionDto): string {
    try {
      const { publicKey, data } = encryptionDto;
      const encrypt = new NodeRSA(publicKey);
      const dataToString: string = JSON.stringify(data);
      const dataEncrypt: any = encrypt.encrypt(dataToString, 'base64');
      return dataEncrypt;
    } catch (e) {
      console.log(e);
    }
  }
}
