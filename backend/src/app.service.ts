import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(test? : string): string {
    return 'Hello World!' + test;
  }
}
