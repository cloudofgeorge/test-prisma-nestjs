import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Module({
  providers: [PrismaService, UsersService, PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
