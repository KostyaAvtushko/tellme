import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './decorator';
import { UserDto } from './dto';
import { UserSearchDto } from './dto/user-search.dto';
import { UserSearch } from './decorator/user-search.decorator';

@Controller('user')
@UsePipes(new ValidationPipe({ whitelist: true }))
export class UserController {
  constructor(private userService: UserService) {}

  @Post('init')
  async init(@User() user: UserDto) {
    return this.userService.init(user);
  }

  @Post('search')
  async search(@UserSearch() search: UserSearchDto) {
    return this.userService.search(search);
  }

  @Post('hangup')
  async hangup(@Body() body: { id: number }) {
    return this.userService.hangup(body.id);
  }
}
