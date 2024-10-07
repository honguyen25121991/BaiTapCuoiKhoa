import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { PrismaClient, nguoi_dung } from '@prisma/client';
import e from 'express';
import { use } from 'passport';
import { userLogin } from './dto/create-auth.dto';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private config: ConfigService) {}
  prisma = new PrismaClient();

  async loginUser(email: string, pass_word: string): Promise<any> {
    const date = new Date();
    const user: userLogin = await this.prisma.nguoi_dung.findFirst({
      where: { email, pass_word },
    });
    if (user !== null) {
      const token = this.jwtService.sign(
        { data: 'nodejs 29' },
        { secret: this.config.get('SECRET_KEY'), expiresIn: '1d' },
      );
      return {
        statusCode: 200,
        'content:': {
          user,
        },
        token: token,
        dateTime: date,
      };
    } else {
      return {
        statusCode: 400,
        message: 'Yêu cầu không hợp lệ!',
        content: 'Email hoặc mật khẩu không đúng !',
        dateTime: date,
      };
    }
  }

  async createUser(user: {
    email: string;
    pass_word: string;
    name: string;
    phone: number;
    birth_day: string;
    gender: string;
    role: string;
    hinh_anh: string;
  }): Promise<any> {
    const { email, name, phone, birth_day, gender, role, hinh_anh } = user;
    const date = new Date();
 // Parse phone as an integer
 const parsedPhone = parseInt(phone.toString(), 10);
    const resuft = await this.prisma.nguoi_dung.findFirst({ where: { email } });
    if (resuft === null) {
      await this.prisma.nguoi_dung.create({ data: {
        ...user,
        phone: parsedPhone, // Use the parsed phone number
      }, });
      return {
        statusCode: 200,
        message: 'Tạo người dùng thành công',
        content: {
          email,
          name,
          phone:parsedPhone,
          birth_day,
          gender,
          role,
          hinh_anh,
        },
        dateTime: date,
      };
    } else {
      return {
        statusCode: 400,
        message: 'Yêu cầu không hợp lệ!',
        content: 'Email đã tồn tại !',
        dateTime: date,
      };
    }
  }
}
