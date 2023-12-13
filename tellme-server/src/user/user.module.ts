import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { RedisStackModule } from 'src/redis/redis-stack.module';
import { UserController } from './user.controller';
import { UserShema } from './schema/user.schema';

@Module({
  imports: [
    RedisStackModule.register({
      schemas: [UserShema],
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
