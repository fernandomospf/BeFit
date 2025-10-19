import { Module } from '@nestjs/common';
import { AuthModule } from '@modules/auth/auth.module';
import { PrismaModule } from '@prisma/prisma.module';
import { UsersModule } from '@modules/users/users.module';
// import { APP_GUARD } from '@nestjs/core';
// import { SupabaseAuthGuard } from '@modules/auth/auth.guard';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule],
  providers: [],
})
export class AppModule {}
