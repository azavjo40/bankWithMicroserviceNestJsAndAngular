import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EncryptController } from './encrypt.controller';
import { EncryptService } from './encrypt.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ENCRYPT',
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 5000 },
      },
    ]),
  ],
  controllers: [EncryptController],
  providers: [EncryptService],
})
export class EncryptModule {}
