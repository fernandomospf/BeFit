import { Module } from '@nestjs/common';
import { WorkoutsService } from './workuts.service';
import { WorkoutsController } from './workuts.controller';
import { PrismaService } from '@prisma/prisma.service';

@Module({
  controllers: [WorkoutsController],
  providers: [WorkoutsService, PrismaService],
  exports: [WorkoutsService],
})
export class WorkoutsModule {}
