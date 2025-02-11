import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('default')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  getHello1(): string {
    return this.appService.getHello('test');
  }
}
