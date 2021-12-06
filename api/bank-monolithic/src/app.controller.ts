import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(
    @Inject('HELLO_SERVICE') private readonly client: ClientProxy,
    private readonly appService: AppService,
  ) {}
  async onApplicationBootstrap() {
    await this.client.connect();
  }
  @Get()
  getHello(): Observable<string> {
    return this.client.send<any>(
      { cmd: 'get/hello' },
      this.appService.getHello(),
    );
  }
}
