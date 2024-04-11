import { Controller, Get } from '@nestjs/common';
import { PingService } from '../service/ping.service';

@Controller()
export class PingController {
  constructor(private readonly appService: PingService) {}

  @Get('/ping')
  getPing(): string {
    return this.appService.getPing();
  }
}
