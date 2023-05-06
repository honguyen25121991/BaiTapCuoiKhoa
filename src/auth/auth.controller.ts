import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { nguoi_dung } from '@prisma/client'
import { userLogin } from 'src/user/Dto/user.dto';

@Controller('auth')

export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  login(@Body() body: userLogin) {
    return this.authService.login(body)
  }
  @Post('sign-up')
  signup(@Body() body: nguoi_dung) {
    return this.authService.signUp(body)
  }

}
