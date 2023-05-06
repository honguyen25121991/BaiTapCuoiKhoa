import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class HandleImagesService {
    prisma = new PrismaClient()

    async getImages(): Promise<any> {
        return await this.prisma.hinh_anh.findMany()
    }

    async getNameImage(
        name: string
    ): Promise<any> {
        return await
            this.prisma.hinh_anh.findFirst({ where: { ten_hinh: name } })
    }

    async getDetaiImage(
        id: string
    ): Promise<any> {
        return await
            this.prisma.hinh_anh.findFirst({ where: { hinh_id: +id } })
    }

    async checkSaveImage(id: number): Promise<any> {
        const check = await this.prisma.luu_anh.findFirst({ where: { hinh_id: +id } })
        if (check !== null) {
            return `Đã lưu`
        } else {
            return ` Chưa lưu`
        }
    }

    async getListImageSaved(id: number): Promise<any> {
        return await this.prisma.hinh_anh.findMany({ where: { nguoi_dung_id: +id } })
    }
    async getListImageCreated(id: number): Promise<any> {
        return await this.prisma.luu_anh.findMany({ where: { nguoi_dung_id: +id } })
    }
    async deleteImage(id: string): Promise<any> {
        const check = await this.prisma.hinh_anh.delete({ where: { hinh_id: +id } })
        console.log(check);
        if (check !== null) {
            return `Delete success`
        } else {
            return `Xoá thất bại`
        }
    }
    async updateImage(id: string, imageName: string,) {
        let data = await this.prisma.hinh_anh.findFirst({
            where: { nguoi_dung_id: +id }
        })
        data.ten_hinh = imageName
        await this.prisma.hinh_anh.update({
            data, where: {
                hinh_id: +id
            }
        })
        return "Upload Success";
    }
}
