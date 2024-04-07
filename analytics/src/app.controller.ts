import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_analytics')
  handleUserAnalytics(data: any) {
    return this.appService.handleUserAnalytics(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getUserAnalytics() {
    return this.appService.getUserAnalytics();
  }
}
