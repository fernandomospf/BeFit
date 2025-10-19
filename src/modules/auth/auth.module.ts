import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { SupabaseJwtService } from './supabase-jwt.service';
import { SupabaseAuthGuard } from './auth.guard';

@Module({
  imports: [
   
    HttpModule,
    ConfigModule,
  ],
  providers: [SupabaseJwtService, SupabaseAuthGuard],
  exports: [SupabaseJwtService, SupabaseAuthGuard],
})
export class AuthModule {}
