import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { appConstants } from 'src/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: appConstants.jwtSecret,
    });
  }

  async validate(payload: any) {
    console.log(`[JwtStrategy] validate: payload=${JSON.stringify(payload)}`)
    return { userId: payload.sub, email: payload.email };
  }
}
