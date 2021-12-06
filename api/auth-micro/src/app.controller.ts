import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @MessagePattern({ cmd: 'get/hello' })
  async getHello(data: any): Promise<string> {
    return `${data} ${this.appService.getHello()}`;
  }
}
