import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('upload_data')
  handleUploadFile(data: any) {
    console.log('handleUploadFile : CLOUD_UPLOAD_SERVICE :', data);
  }
}
