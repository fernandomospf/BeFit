import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createRemoteJWKSet, jwtVerify, JWTPayload } from 'jose';

@Injectable()
export class SupabaseJwtService {
  private jwks = createRemoteJWKSet(new URL(process.env.SUPABASE_URL! + '/auth/v1/jwks'));

  async verify(token: string): Promise<JWTPayload> {
    if (!token) throw new UnauthorizedException('Missing token');
    try {
      const { payload } = await jwtVerify(token, this.jwks, {
      });
      return payload;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
