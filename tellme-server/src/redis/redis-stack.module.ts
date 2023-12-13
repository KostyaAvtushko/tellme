import { DynamicModule, Module } from '@nestjs/common';
import { createClient } from 'redis';

@Module({})
export class RedisStackModule {
  static register(options: Record<string, any>): DynamicModule {
    const providerFactory = {
      provide: 'REDIS_CONNECTION',
      useFactory: async () => {
        const client = createClient();
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
        Promise.all(
          options['schemas'].map(async (schema) => {
            await schema.init(client);
          }),
        );
        return client;
      },
    };

    return {
      module: RedisStackModule,
      providers: [providerFactory],
      exports: [providerFactory],
    };
  }
}
