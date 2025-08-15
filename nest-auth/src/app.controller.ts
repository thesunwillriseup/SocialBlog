import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';  // Import ApiTags for controller-level docs
import { AppService } from './app.service';

@ApiTags('App')  // Tags for the controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
