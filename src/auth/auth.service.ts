import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { nguoi_dung } from '@prisma/client';
import { userLogin } from 'src/user/Dto/user.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService
  ) { }
  login(userLogin: userLogin) {
    let token = this.jwtService.sign({ data: 'nodejs 29' },
      { secret: this.config.get("SECRET_KEY"), expiresIn: "60m" }
    )
    return token
  }

  signUp(user: nguoi_dung) {

  }
}
