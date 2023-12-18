import { Inject, Injectable } from '@nestjs/common';
import type { RedisClientType } from 'redis';
import { UserSearchDto } from './dto/user-search.dto';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('REDIS_CONNECTION') private redisClient: RedisClientType,
  ) {}

  async init(user: UserDto) {
    const users_max_id = await this.redisClient.get('users_max_id');
    //@ts-ignore
    await this.redisClient.json.set(`user:${users_max_id}`, '$', user);
    await this.redisClient.set('users_max_id', parseInt(users_max_id) + 1);
    return users_max_id;
  }

  async search(search: UserSearchDto) {
    const { age, gender } = search;
    const users = (
      await this.redisClient.ft.search(
        'idx:user',
        `${gender} @age:[${age} ${age}]`,
      )
    ).documents;

    const firstUser = users[0].value;

    return firstUser;
  }

  async hangup(id: number) {
    //@ts-ignore
    return this.redisClient.json.del(`user:${id}`);
  }
}
