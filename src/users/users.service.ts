import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { user as UserModel, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.userWhereUniqueInput,
  ): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.userWhereUniqueInput;
    where?: Prisma.userWhereInput;
  }): Promise<UserModel[]> {
    const { skip, take, cursor, where } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async createUser(data: Prisma.userCreateInput): Promise<UserModel> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.userWhereUniqueInput;
    data: Prisma.userUpdateInput;
  }): Promise<UserModel> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.userWhereUniqueInput): Promise<UserModel> {
    return this.prisma.user.delete({
      where,
    });
  }
}
