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
      const { userId, timeId } = autoCreateCryptoKeyDto;
      const encryptKeysService: any = await this.encrypt.findOne({
        userId: userId && userId,
        timeId: timeId && timeId,
      });
      if (encryptKeysService) return encryptKeysService;
      const newKey = new NodeRSA({ b: 1024 });
      const publicKey = newKey.exportKey('public');
      const privateKey = newKey.exportKey('private');
      const encryptKeys = await new this.encrypt({
        publicKey,
        privateKey,
        userId: userId && userId,
        timeId: timeId && timeId,
      }).save();
      if (!userId) {
        setTimeout(async () => {
          try {
            await this.encrypt.deleteOne({ timeId });
          } catch (e) {
            console.log(e);
          }
        }, 9000);
      }
      return encryptKeys;
    } catch (e) {
      console.log(e);
    }
  }

  async decryption(decryptionDto: DecryptionDto) {
    try {
      const { userId, timeId, data } = decryptionDto;
      const keys: any = await this.autoCreateCryptoKey({
        userId: userId && userId,
        timeId: timeId && timeId,
      });
      const decrypte = new NodeRSA(keys.privateKey);
      const decryptData = decrypte.decrypt(data, 'utf8');
      const decryptDataToParse: any = JSON.parse(decryptData);
      return decryptDataToParse;
    } catch (e) {
      console.log(e);
    }
  }

  async encryption(encryptionDto: EncryptionDto) {
    try {
      const { userId, timeId, publicKey, data } = encryptionDto;
      const keys: any = await this.autoCreateCryptoKey({
        userId: userId && userId,
        timeId: timeId && timeId,
      });
      const encrypt = new NodeRSA(publicKey ? publicKey : keys.publicKey);
      const dataToString: string = JSON.stringify(data);
      const dataEncrypt: any = encrypt.encrypt(dataToString, 'base64');
      return dataEncrypt;
    } catch (e) {
      console.log(e);
    }
  }
}
