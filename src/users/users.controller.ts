import { Body, Controller, Post } from '@nestjs/common';
import { user as UserModel } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async signupUser(
    @Body() userData: { username: string; email: string },
  ): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }
}
