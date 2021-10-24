import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { post as PostModel } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.postWhereUniqueInput,
  ): Promise<PostModel | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.postWhereUniqueInput;
    where?: Prisma.postWhereInput;
  }): Promise<PostModel[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async createPost(data: Prisma.postCreateInput): Promise<PostModel> {
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.postWhereUniqueInput;
    data: Prisma.postUpdateInput;
  }): Promise<PostModel> {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.postWhereUniqueInput): Promise<PostModel> {
    return this.prisma.post.delete({
      where,
    });
  }
}
