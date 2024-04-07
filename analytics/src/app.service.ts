import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserAnalytics(data: any) {
    console.log('handleUserAnalytics : ANALYTICS SERVICE', data);
    this.analytics.push(data);
  }

  getUserAnalytics() {
    return { success: true, analytics: this.analytics };
  }
}
