import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/items")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return "Hello World!"
  }
}
