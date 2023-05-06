import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommentService {
    prisma = new PrismaClient()
    async getComment(
        id: string
    ): Promise<any> {
        return await
            this.prisma.binh_luan.findMany({ where: { hinh_id: +id } })
    }
    async postComment(content: any): Promise<any> {
        try {
            return await
                this.prisma.binh_luan.create({ data: content })
        } catch (error) {
            throw new HttpException('Lỗi BE', HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
