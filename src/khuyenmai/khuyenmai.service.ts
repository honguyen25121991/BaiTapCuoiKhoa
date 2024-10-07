import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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

  async createKhuyenMai(ma_khuyen_mai: string, ten_san_pham: string, hinh_anh: string) {
    return this.prisma.khuyen_mai.create({
      data: { ma_khuyen_mai, ten_san_pham , hinh_anh},
    });
  }

  async updateKhuyenMai(id: number, ma_khuyen_mai: string, ten_san_pham: string, hinh_anh: string) {
    const khuyenMai = await this.prisma.khuyen_mai.findUnique({
      where: { Id: +id },
    });
    const existingKhuyenMai = await this.prisma.khuyen_mai.findFirst({
      where: { ma_khuyen_mai },
    });
    if (!khuyenMai) {
      throw new NotFoundException();
    }
    if (existingKhuyenMai && existingKhuyenMai.Id !== id) {
      throw new ConflictException();
    }

    return this.prisma.khuyen_mai.update({
      where: { Id: +id },
      data: { ma_khuyen_mai, ten_san_pham },
    });
  }

  async deleteKhuyenMai(id: number) {
    return this.prisma.khuyen_mai.delete({
      where: { Id: id },
    });
  }
}