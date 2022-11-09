import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/items")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): [{},{},{},{},{}] {
    //return this.appService.getHello();
    return [{name: "Pratik"},{name: "Tech"},{name: "Test"},{name: "Ankur"},{name: "Devtest"}]
  }
}
