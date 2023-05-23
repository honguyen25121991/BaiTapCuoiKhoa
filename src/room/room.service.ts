import { Injectable } from '@nestjs/common';
import { PrismaClient, } from '@prisma/client';

@Injectable()
export class RoomService {
  prisma = new PrismaClient()
  async createRoom(data: {
    "ten_phong": string,
    "khach": number,
    "phong_ngu": number,
    "giuong": number,
    "phong_tam": number,
    "mo_ta": string,
    "gia_tien": number,
    "bep": boolean,
    "may_giat": boolean,
    "ban_la": boolean,
    "tivi": boolean,
    "dieu_hoa": boolean,
    "wifi": boolean,
    "do_xe": boolean,
    "ho_boi": boolean,
    "ban_ui": boolean,
    "hinh_anh": string,
    "id_vi_tri": number
  }): Promise<any> {
    const date = new Date();
    const idViTri = await this.prisma.vi_tri.findFirst(({
      where: {
        id_vi_tri: data.id_vi_tri
      }
    }))
    if (idViTri !== null) {
      const resuft = await this.prisma.phong.create({
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
          'content': 'Tạo phòng thất bại',
          "dateTime": date
        }
      }
    } else {
      return {
        "statusCode": 404,
        'content': 'Vị trí này không tồn tại',
        "dateTime": date
      }
    }

  }
  async updateImage(id: string, ten_hinh: string, mo_ta: string, hinh_id: string, duong_dan: string) {
    const date = new Date();
    const checkIdImage = await this.prisma.phong.findFirst({
      where: {
        id_phong: +hinh_id
      }
    })
    const checkIdUser = await this.prisma.phong.findFirst({
      where: {
        id_phong: +id
      }
    })
    if (checkIdUser !== null) {
      if (checkIdImage === null) {
        return {
          "statusCode": 404,
          "message": " Id ảnh không tồn tại",
          "dateTime": date
        }
      } else {
        await this.prisma.phong.update({
          data: {
            id_phong: +id,
            ten_phong: ten_hinh,
            mo_ta: mo_ta,
          }, where: {
            id_phong: +hinh_id
          }
        })
        return {
          "statusCode": 200,
          "message": "Update ảnh thành công ",
          "content": {
            ten_hinh, duong_dan, mo_ta,
          },
          "dateTime": date
        }
      }
    } else {
      return {
        "statusCode": 404,
        "message": " Id người dùng không tồn tại",
        "dateTime": date
      }
    }


  }

  async getAllRoom(): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.phong.findMany()
    if (resuft.length > 0) {
      return {
        "statusCode": 200,
        'content': resuft,
        "dateTime": date
      }
    } else {
      return {
        "statusCode": 404,
        'content': 'Chưa tạo phòng',
        "dateTime": date
      }

    }

  }

  async getRoomById(id: number): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.phong.findMany({ where: { id_phong: +id } })
    if (resuft.length > 0) {
      return {
        "statusCode": 200,
        'content': resuft,
        "dateTime": date
      }
    } else {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy phòng',
        "dateTime": date
      }
    }
  }


  async getRoomByLocation(id: number): Promise<any> {
    const date = new Date();
    const resuft = await this.prisma.phong.findMany({ where: { id_vi_tri: +id } })
    if (resuft !== null) {
      return {
        "statusCode": 200,
        'content': resuft,
        "dateTime": date
      }
    } else {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy phòng',
        "dateTime": date
      }
    }
  }
  async updateRoomInfo(id: number, data: {
    "ten_phong": string,
    "khach": number,
    "phong_ngu": number,
    "giuong": number,
    "phong_tam": number,
    "mo_ta": string,
    "gia_tien": number,
    "bep": boolean,
    "may_giat": boolean,
    "ban_la": boolean,
    "tivi": boolean,
    "dieu_hoa": boolean,
    "wifi": boolean,
    "do_xe": boolean,
    "ho_boi": boolean,
    "ban_ui": boolean,
    "hinh_anh": string
    "id_vi_tri": number
  }): Promise<any> {
    const date = new Date();
    const checkId = await this.prisma.phong.findFirst({ where: { id_phong: +id } })

    if (checkId == null) {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy id bình luận',
        "dateTime": date
      }
    } else {
      const resuft = await this.prisma.phong.update({
        data, where: ({
          id_phong: +id
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
          'content': 'Cập nhật bình luận thất bại',
          "dateTime": date
        }
      }
    }

  }

  async remove(id: number) {
    const date = new Date();
    const checkId = await this.prisma.phong.findFirst({ where: { id_phong: +id } })
    if (checkId === null) {
      return {
        "statusCode": 404,
        'content': 'Không tìm thấy id phòng',
        "dateTime": date
      }
    } else {
      const resuft = await this.prisma.phong.delete({ where: { id_phong: +id } })
      if (resuft) {
        return {
          "statusCode": 200,
          'content': 'Xoá phòng thành công',
          "dateTime": date
        }
      } else {
        return {
          "statusCode": 404,
          'content': 'Xoá phòng thất bại',
          "dateTime": date
        }
      }
    }
  }
}
