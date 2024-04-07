import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CLOUD_UPLOAD_SERVICE')
    private readonly cloudUploadService: ClientProxy,
    @Inject('ANALYTICS_SERVICE') private readonly analyticsService: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  uploadMediaFileData(data: any) {
    this.cloudUploadService.emit('upload_data', data);
    this.analyticsService.emit('user_analytics', data);
    return { success: true, message: 'File is uploading in progress...' };
  }

  getUserAnalytics() {
    return this.analyticsService.send({ cmd: 'get_analytics' }, {});
  }
}
