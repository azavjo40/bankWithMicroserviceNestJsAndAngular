import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Role } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/roles.decorator';
import { AutoCreateCryptoKeyDto } from './dto/autoCreateCryptoKey.dto';
import { DecryptionDto } from './dto/decryption.dto';
import { EncryptionDto } from './dto/encryption.dto';
import { EncryptService } from './encrypt.service';
import { IAutoCreateCryptoKey } from './intarface';

@Controller('encrypt')
export class EncryptController {
  constructor(private encryptService: EncryptService) {}

  @Post('auto/create/crypto/key')
  autoCreateCryptoKey(@Body() autoCreateCryptoKeyDto: any) {
    console.log(autoCreateCryptoKeyDto);
    return this.encryptService.autoCreateCryptoKey(autoCreateCryptoKeyDto);
  }

  //   @UseGuards(JwtAuthGuard)
  //   @Roles(Role.Manager, Role.Director, Role.Client)
  @Post('decryption')
  decryption(@Body() decryptionDto: DecryptionDto) {
    return this.encryptService.decryption(decryptionDto);
  }

  // @UseGuards(JwtAuthGuard)
  // @Roles(Role.Manager, Role.Director, Role.Client)
  @Post('encryption')
  encryption(@Body() encryptionDto: EncryptionDto) {
    return this.encryptService.encryption(encryptionDto);
  }
}
