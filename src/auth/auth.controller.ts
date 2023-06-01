import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { userLogin } from './dto/create-auth.dto';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
class Auth {
  @ApiProperty({
    description: 'email',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'pass_word',
    type: String,
  })
  pass_word: string;
}
class AuthLogin {
  @ApiProperty({
    description: 'email',
    type: String,
  })
  email: string;
  @ApiProperty({
    description: 'pass_word',
    type: String,
  })
  pass_word: string;
  @ApiProperty({
    description: 'name',
    type: String,
  })
  name: string;
  @ApiProperty({
    description: 'phone',
    type: Number,
  })
  phone: number;
  @ApiProperty({
    description: 'birth_day',
    type: String,
  })
  birth_day: string;
  @ApiProperty({
    description: 'gender',
    type: String,
  })
  gender: string;
  @ApiProperty({
    description: 'role',
    type: String,
  })
  role: string;
  @ApiProperty({
    description: 'hinh_anh',
    type: String,
  })
  hinh_anh: string;
}
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({
    type: Auth,
  })
  @Post('/signup')
  loginUser(@Body() body: userLogin): Promise<nguoi_dung[]> {
    try {
      const { email, pass_word } = body;
      return this.authService.loginUser(email, pass_word);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBody({
    type: AuthLogin,
  })
  @Post('/signing')
  async createUser(
    @Body()
    body: {
      email: string;
      pass_word: string;
      name: string;
      phone: number;
      birth_day: string;
      gender: string;
      role: string;
      hinh_anh: string;
    },
  ): Promise<nguoi_dung[]> {
    try {
      const {
        email,
        pass_word,
        name,
        phone,
        birth_day,
        gender,
        role,
        hinh_anh,
      } = body;
      return await this.authService.createUser({
        email,
        pass_word,
        name,
        phone,
        birth_day,
        gender,
        role,
        hinh_anh,
      });
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }
}
