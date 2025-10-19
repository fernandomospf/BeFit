import { Module } from '@nestjs/common';
import { AuthModule } from '@modules/auth/auth.module';
import { PrismaModule } from '@prisma/prisma.module';
import { UsersModule } from '@modules/users/users.module';
import { WorkoutsModule } from './workuts/workuts.module';


@Module({
  imports: [AuthModule, PrismaModule, UsersModule, WorkoutsModule],
  providers: [],
})
export class AppModule {}
