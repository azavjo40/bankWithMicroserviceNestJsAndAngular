import { Test, TestingModule } from '@nestjs/testing';
import { EncryptController } from './encrypt.controller';

describe('EncryptController', () => {
  let controller: EncryptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncryptController],
    }).compile();

    controller = module.get<EncryptController>(EncryptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
