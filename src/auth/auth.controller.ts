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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { userLogin } from './dto/create-auth.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiProperty, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
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
  @ApiProperty({ description: 'Email of the user' })
  email: string;

  @ApiProperty({ description: 'Password of the user' })
  pass_word: string;

  @ApiProperty({ description: 'Name of the user' })
  name: string;

  @ApiProperty({ description: 'Phone number of the user' })
  phone: number;

  @ApiProperty({ description: 'Birth date of the user' })
  birth_day: string;

  @ApiProperty({ description: 'Gender of the user' })
  gender: string;

  @ApiProperty({ description: 'Role of the user' })
  role: string;

  @ApiProperty({ type: 'string', format: 'binary', description: 'Profile picture of the user' })
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

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: AuthLogin,
  })
  @UseInterceptors(
    FileInterceptor('hinh_anh', {
      storage: diskStorage({
        destination: './public/img',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @Post('/signing')
  async createUser(
    @Body() body: {
      email: string;
      pass_word: string;
      name: string;
      phone: number;
      birth_day: string;
      gender: string;
      role: string;
    },
    @UploadedFile() file: Express.Multer.File,
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
      } = body;
      const hinh_anh = file ? `http://localhost:3000/public/img/${file.filename}` : null;

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
      console.log('error', error);
      throw new HttpException('Lỗi BE', 500);
    }
  }
}