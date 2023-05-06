import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { nguoi_dung } from '@prisma/client'
import { userLogin } from 'src/user/Dto/user.dto';

@Controller('auth')

export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/signup")
  async loginUser(
    @Body() body: userLogin,
  ): Promise<
    { email: string, pass_word: string }
  > {
    try {
      const { email, pass_word } = body
      return await this.authService.loginUser(email, pass_word)
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @Post("/signin")
  async createUser(
    @Body() body: {
      email: string, pass_word: string, name: string, phone: number,
      birth_day: string, gender: string, role: string
    },
  ): Promise<{
    email: string, pass_word: string, name: string, phone: number,
    birth_day: string, gender: string, role: string
  }> {
    try {
      const { email, pass_word, name, phone, birth_day,
        gender, role } = body
      return await this.authService.createUser({
        email, pass_word, name, phone, birth_day,
        gender, role
      })
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

}
