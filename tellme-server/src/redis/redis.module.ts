import { Module } from '@nestjs/common';
import { createClient } from 'redis';

const redisConnectionFactory = {
  provide: 'REDIS_CONNECTION',
  useFactory: async () => {
    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    return client;
  },
};

@Module({
  providers: [redisConnectionFactory],
  exports: [redisConnectionFactory],
})
export class RedisModule {}
