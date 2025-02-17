// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }

 
// }


import { Controller, Get } from '@nestjs/common';
import { TelegramService } from './telegram/telegram.service';

@Controller()
export class AppController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get('test-updates')
  async testUpdates() {
    console.log('test-updates route called'); // Log to check if route is hit
    await this.telegramService.sendDailyUpdates();
    return 'Weather updates sent!';
  }
}
