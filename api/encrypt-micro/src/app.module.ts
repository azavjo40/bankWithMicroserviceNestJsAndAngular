import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoDb } from './constants';
import { Encrypt, EncryptSchema } from './schemas/encrypt.schema';

@Module({
  imports: [
    MongooseModule.forRoot(mongoDb.url),
    MongooseModule.forFeature([{ name: Encrypt.name, schema: EncryptSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
