import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    // CacheModule.register({
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   // eslint-disable-next-line prettier/prettier
    //   store: async () => await redisStore({
    //       socket: {
    //         host: 'localhost',
    //         port: 6379,
    //       },
    //     }),
    // }),
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
