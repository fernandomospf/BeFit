import { Global, Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [
    {
      provide: PrismaClient,
      useFactory: () => new PrismaClient(),
    },
    PrismaService,
  ],
  exports: [PrismaClient, PrismaService],
})
export class PrismaModule implements OnModuleInit, OnModuleDestroy {
  constructor(private prisma: PrismaClient) {}
  async onModuleInit() { await this.prisma.$connect(); }
  async onModuleDestroy() { await this.prisma.$disconnect(); }
}
