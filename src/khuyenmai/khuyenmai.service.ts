import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class KhuyenMaiService {
  private prisma = new PrismaClient();

  async getAllKhuyenMai() {
    return this.prisma.khuyen_mai.findMany();
  }

  async getKhuyenMaiById(id: number) {
    return this.prisma.khuyen_mai.findUnique({
      where: { Id: id },
    });
  }

  async createKhuyenMai(ma_khuyen_mai: string, ten_san_pham: string) {
    return this.prisma.khuyen_mai.create({
      data: { ma_khuyen_mai, ten_san_pham },
    });
  }

  async updateKhuyenMai(id: number, ma_khuyen_mai: string, ten_san_pham: string) {
    const checkId = await this.prisma.khuyen_mai.findFirst({ where: { Id: +id } })
    if (!checkId) {
      throw new NotFoundException(`Khuyen Mai with ID ${id} not found`);
    } else {
      const result = await this.prisma.khuyen_mai.update({
        where: { Id: id },
        data: { ma_khuyen_mai, ten_san_pham },
      });
      if (result) {
        return {
          "statusCode": 200,
          'content': 'Cập nhật khuyến mãi thành công',
          data: result
        }
      } else {
        return {
          "statusCode": 404,
          'content': 'Cập nhật khuyến mãi thất bại',
        }
      }
    }
  }

  async deleteKhuyenMai(id: number) {
    const checkId = await this.prisma.khuyen_mai.findFirst({ where: { Id: +id } })
    if (!checkId) {
      throw new NotFoundException(`Khuyen Mai with ID ${id} not found`);
    } else {
      const result = await this.prisma.khuyen_mai.delete({
        where: { Id: id },
      });
      if (result) {
        return {
          "statusCode": 200,
          'content': 'Xoá khuyến mãi thành công',
        }
      } else {
        return {
          "statusCode": 404,
          'content': 'Xoá khuyến mãi thất bại',
        }
      }
    }
  }
}