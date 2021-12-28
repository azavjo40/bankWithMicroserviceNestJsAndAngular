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
        options: { port: 6000 },
      },
    ]),
  ],
  controllers: [EncryptController],
  providers: [EncryptService],
  exports: [EncryptService],
})
export class EncryptModule {}
