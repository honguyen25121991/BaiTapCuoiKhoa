import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LocationService {
  prisma = new PrismaClient();

  async createLocation(data: {
    ten_vi_tri: string;
    tinh_thanh: string;
    quoc_gia: string;
    hinh_anh: string;
  }): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.vi_tri.create({
      data,
    });
    if (resuft) {
      return {
        statusCode: 200,
        content: resuft,
        dateTime: date,
      };
    } else {
      return {
        statusCode: 404,
        content: 'Tạo vị trí thất bại',
        dateTime: date,
      };
    }
  }

  async getAllLocation(): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.vi_tri.findMany();
    if (resuft.length > 0) {
      return {
        statusCode: 200,
        content: resuft,
        dateTime: date,
      };
    } else
      return {
        statusCode: 404,
        content: 'Chưa có vị trí  được tạo',
        dateTime: date,
      };
  }

  async getLocationwithId(id: string): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.vi_tri.findMany({
      where: {
        id_vi_tri: +id,
      },
    });
    if (resuft.length > 0) {
      return {
        statusCode: 200,
        content: resuft,
        dateTime: date,
      };
    } else {
      return {
        statusCode: 404,
        content: 'Không tìm thấy vị trí',
        dateTime: date,
      };
    }
  }
  async updateLocation(
    data: {
      ten_vi_tri: string;
      tinh_thanh: string;
      quoc_gia: string;
      hinh_anh: string;
    },
    id: number,
  ): Promise<any> {
    const date = new Date();
    const checkId = await this.prisma.vi_tri.findFirst({
      where: { id_vi_tri: +id },
    });
    if (checkId == null) {
      return {
        statusCode: 404,
        content: 'Không tìm thấy id vị trí',
        dateTime: date,
      };
    } else {
      const resuft = await this.prisma.vi_tri.update({
        data,
        where: {
          id_vi_tri: +id,
        },
      });
      if (resuft) {
        return {
          statusCode: 200,
          content: resuft,
          dateTime: date,
        };
      } else {
        return {
          statusCode: 404,
          content: 'Cập nhật vị trí thất bại',
          dateTime: date,
        };
      }
    }
  }
  async deleteLocation(id: string): Promise<any> {
    const date = new Date();
    const checkId = await this.prisma.vi_tri.findFirst({
      where: { id_vi_tri: +id },
    });
    if (checkId === null) {
      return {
        statusCode: 404,
        content: 'Không tìm thấy id vị trí',
        dateTime: date,
      };
    } else {
      const resuft = await this.prisma.vi_tri.delete({
        where: { id_vi_tri: +id },
      });
      if (resuft) {
        return {
          statusCode: 200,
          content: 'Xoá vị trí thành công',
          dateTime: date,
        };
      } else {
        return {
          statusCode: 404,
          content: 'Xoá vị trí thất bại',
          dateTime: date,
        };
      }
    }
  }

  async postImage(id: string, duong_dan: string) {
    const date = new Date();
    const checkIdUser = await this.prisma.vi_tri.findFirst({
      where: {
        id_vi_tri: +id,
      },
    });
    if (checkIdUser !== null) {
      await this.prisma.vi_tri.update({
        data: {
          hinh_anh: duong_dan,
        },
        where: {
          id_vi_tri: +id,
        },
      });
      return {
        statusCode: 200,
        message: 'Tải ảnh vị trí thành công ',
        content: {
          hinh_anh: duong_dan,
        },
        dateTime: date,
      };
    } else {
      return {
        statusCode: 404,
        message: ' Id vị trí không tồn tại',
        dateTime: date,
      };
    }
  }

  async getLocationSearchPage(
    pageIndex: number,
    pageSize: number,
    keyword: string,
  ): Promise<any> {
    const date = new Date();
    const result = await this.prisma.vi_tri.findMany({
      skip: (pageIndex - 1) * pageSize,
      take: +pageSize,
      where: {
        ten_vi_tri: {
          contains: keyword,
        },
      },
    });
    const totalRow = await this.prisma.vi_tri.count({
      where: {
        ten_vi_tri: {
          contains: keyword,
        },
      },
    });
    if (result.length > 0) {
      return {
        statusCode: 200,
        content: result,
        totalRow: totalRow,
        dateTime: date,
      };
    } else {
      return {
        statusCode: 404,
        content: 'Không tìm thấy kết quả',
        dateTime: date,
      };
    }
  }
}
