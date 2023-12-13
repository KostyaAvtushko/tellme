import { Inject, Injectable } from '@nestjs/common';
import type { RedisClientType } from 'redis';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('REDIS_CONNECTION') private redisClient: RedisClientType,
  ) {}

  async init(user: UserDto) {
    const users_max_id = await this.redisClient.get('users_max_id');
    await this.redisClient.json.set(
      `user:${users_max_id}`,
      '$',
      JSON.stringify(user),
    );
    await this.redisClient.set('users_max_id', parseInt(users_max_id) + 1);
    return users_max_id;
  }

  async search(age: number) {
    return await this.redisClient.ft.search('idx:user', '@name:Andrew');
  }
}
