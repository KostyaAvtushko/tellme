import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('set/:key')
  async set(@Param() params: any) {
    return params.key;
  }

  @Get('/get/:key')
  async get(@Param() params: any) {
    return params.key;
  }
}
