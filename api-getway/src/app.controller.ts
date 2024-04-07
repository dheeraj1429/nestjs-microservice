import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/upload-file')
  uploadMediaFileData(@Body() body: any) {
    return this.appService.uploadMediaFileData(body);
  }

  @Get('/get-user-analytics')
  getUserAnalytics() {
    return this.appService.getUserAnalytics();
  }
}
