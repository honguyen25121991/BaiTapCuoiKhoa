import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommentService {
  prisma = new PrismaClient();

  async createComment(data: {
    ma_cong_viec: number;
    ma_nguoi_binh_luan: number;
    ngay_binh_luan: string;
    noi_dung: string;
    id_phong: number;
    sao_binh_luan: number;
  }): Promise<any> {
    const date = new Date();

    const resuft = await this.prisma.binh_luan.create({
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
        content: 'Đăng comment thất bại',
        dateTime: date,
      };
    }
  }

  async getComment(id: string): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.binh_luan.findMany({
      where: { id_binh_luan: +id },
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
        content: 'Không tìm thấy bình luận',
        dateTime: date,
      };
    }
  }

  async getCommentWithRoomId(id: number): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.binh_luan.findMany({
      where: {
        id_phong: +id,
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
        content: 'Không tìm thấy bình luận',
        dateTime: date,
      };
    }
  }

  async getAllComment(): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.binh_luan.findMany();
    if (resuft.length > 0) {
      return {
        statusCode: 200,
        content: resuft,
        dateTime: date,
      };
    } else
      return {
        statusCode: 404,
        content: 'Chưa có bình luận',
        dateTime: date,
      };
  }

  async updateComment(
    data: {
      ma_cong_viec: number;
      ma_nguoi_binh_luan: number;
      ngay_binh_luan: string;
      noi_dung: string;
      sao_binh_luan: number;
      id_phong: number;
    },
    id: number,
  ): Promise<any> {
    const date = new Date();
    const checkId = await this.prisma.binh_luan.findFirst({
      where: { id_binh_luan: +id },
    });
    if (checkId == null) {
      return {
        statusCode: 404,
        content: 'Không tìm thấy id bình luận',
        dateTime: date,
      };
    } else {
      const resuft = await this.prisma.binh_luan.update({
        data,
        where: {
          id_binh_luan: +id,
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
          content: 'Cập nhật bình luận thất bại',
          dateTime: date,
        };
      }
    }
  }

  async deleteComment(id: string): Promise<any> {
    const date = new Date();
    const checkId = await this.prisma.binh_luan.findFirst({
      where: { id_binh_luan: +id },
    });
    if (checkId === null) {
      return {
        statusCode: 404,
        content: 'Không tìm thấy id bình luận',
        dateTime: date,
      };
    } else {
      const resuft = await this.prisma.binh_luan.delete({
        where: { id_binh_luan: +id },
      });
      if (resuft) {
        return {
          statusCode: 200,
          content: 'Xoá comment thành công',
          dateTime: date,
        };
      } else {
        return {
          statusCode: 404,
          content: 'Xoá comment thất bại',
          dateTime: date,
        };
      }
    }
  }
}
