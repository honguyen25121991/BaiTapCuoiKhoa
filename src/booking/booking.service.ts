import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class BookingService {
  prisma = new PrismaClient()

  async createBooking(
    data: {
      ma_phong: number,
      ngay_den: string,
      ngay_di: string,
      so_luong_khach: number
      id_nguoi_dung: number,
      id_phong: number;
    }
  ): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.dat_phong.create({
      data
    })
    if (resuft) {
      return {
        "statusCode": 200,
        'content': resuft,
        "dateTime": date
      }
    } else {
      return {
        "statusCode": 404,
        'content': 'Đặt phòng thất bại',
        "dateTime": date
      }
    }
  }

  async getAllBooking(): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.dat_phong.findMany()
    if (resuft.length > 0) {
      return {
        "statusCode": 200,
        'content': resuft,
        "dateTime": date
      }
    } else
      return {
        "statusCode": 404,
        'content': 'Chưa có booking',
        "dateTime": date
      }
  }

  async getBookingWithId(id: string): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.dat_phong.findMany({ where: { id_dat_phong: +id } })
    if (resuft.length > 0) {
      return {
        "statusCode": 200,
        'content': resuft,
        "dateTime": date
      }
    } else {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy phòng đã đặt',
        "dateTime": date
      }
    }
  }

  async getBookingWithIdUser(id: string): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.dat_phong.findMany({
      where: {
        id_nguoi_dung: + id
      }
    })
    if (resuft.length > 0) {
      return {
        "statusCode": 200,
        'content': resuft,
        "dateTime": date
      }
    } else {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy phòng đã đặt với mã người dùng bạn cung cấp',
        "dateTime": date
      }
    }
  }


  async updateBooking(
    data: {
      ma_phong: number,
      ngay_den: string,
      ngay_di: string,
      so_luong_khach: number
      id_nguoi_dung: number,
      id_phong: number;
    }, id: number
  ): Promise<any> {
    const date = new Date();
    const checkId = await this.prisma.dat_phong.findFirst({ where: { id_dat_phong: +id } })
    if (checkId == null) {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy id đặt phòng',
        "dateTime": date
      }
    } else {
      const resuft = await this.prisma.dat_phong.update({
        data, where: ({
          id_dat_phong: +id
        })
      })
      if (resuft) {
        return {
          "statusCode": 200,
          'content': resuft,
          "dateTime": date
        }
      } else {
        return {
          "statusCode": 404,
          'content': 'Cập nhật đặt phòng thất bại',
          "dateTime": date
        }
      }
    }

  }

  async deleteBooking(id: string): Promise<any> {
    const date = new Date();
    const checkId = await this.prisma.dat_phong.findFirst({ where: { id_dat_phong: +id } })
    if (checkId === null) {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy id đặt phòng',
        "dateTime": date
      }
    } else {
      const resuft = await this.prisma.dat_phong.delete({ where: { id_dat_phong: +id } })
      if (resuft) {
        return {
          "statusCode": 200,
          'content': 'Xoá đặt phòng thành công',
          "dateTime": date
        }
      } else {
        return {
          "statusCode": 404,
          'content': 'Xoá đặt phòng thất bại',
          "dateTime": date
        }
      }
    }
  }
}
