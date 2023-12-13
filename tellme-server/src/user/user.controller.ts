import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { InitUser } from './decorator';
import { UserDto } from './dto';

@Controller('user')
@UsePipes(new ValidationPipe({ whitelist: true }))
export class UserController {
  constructor(private userService: UserService) {}

  @Post('init')
  async init(@InitUser() user: UserDto) {
    return this.userService.init(user);
  }

  @Post('search')
  async search(@Body() body: any) {
    return this.userService.search(body.age);
  }
}
