import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaService, UsersModule, PostsModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
