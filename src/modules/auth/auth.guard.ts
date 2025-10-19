import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { SupabaseJwtService } from './supabase-jwt.service';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private readonly jwt: SupabaseJwtService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    const auth = req.headers['authorization'] as string | undefined;
    if (!auth?.startsWith('Bearer ')) throw new UnauthorizedException('No bearer token');

    const token = auth.slice('Bearer '.length);
    const payload = await this.jwt.verify(token);

    req.user = {
      id: payload.sub,
      email: (payload as any).email
    };
    return true;
  }
}

