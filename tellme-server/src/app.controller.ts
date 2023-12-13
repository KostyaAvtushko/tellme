import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { RedisClientType } from 'redis';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('REDIS_CONNECTION') private redisClient: RedisClientType,
  ) {}

  @Get('set/:key')
  async set(@Param() params: any) {
    await this.redisClient.set(params.key, params.key);
    return this.appService.getHello();
  }

  @Get('/get/:key')
  async get(@Param() params: any) {
    const result = await this.redisClient.get(params.key);
    return result;
  }
}
