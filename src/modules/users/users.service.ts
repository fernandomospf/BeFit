import { ConflictException, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async desactivateUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, isActive: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!user.isActive) {
      throw new ConflictException('User already deactivated');
    }

    return this.prisma.user.update({
      where: { id },
      data: {
        isActive: false,
        desactivatedAt: new Date(),
      },
    });
  }

  async reactivateUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, isActive: true },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.isActive) {
      throw new ConflictException('User already active');
    }
    return this.prisma.user.update({
      where: { id },
      data: {
        isActive: true,
        desactivatedAt: null,
      },
    });
  }

  createUser(data: Prisma.UserCreateInput) {
    if (!data) {
      throw new BadRequestException('Dados do usuário são obrigatórios');
    }
    return this.prisma.user.create({ data });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

}
